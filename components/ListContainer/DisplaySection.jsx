"use client";

import React, { useEffect, useState } from "react";
import TabButtons from "./TabButtons";
import ScrollView from "./ScrollView";
import axios from "axios";
import { apiLink } from "@/api";

const DisplaySection = ({ title, tabs }) => {
  const [active, setActive] = useState(0);
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getLists = async () => {
      setLoading(true);
      console.log(process.env.NEXT_PUBLIC_TMDB_KEY, "hey");
      try {
        const res = await axios.get(
          apiLink +
            tabs[active].api +
            `&api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`
        );

        setLists(res.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
      setTimeout(() => setLoading(false), 700);
    };
    getLists();
  }, [active]);

  return (
    <div className="w-[100%] lg:w-[90%] xl:w-[75%] flex flex-col mb-10 gap-10 items-center">
      <div className="flex w-[90%] md:items-baseline gap-5 md:flex-row flex-col justify-center md:justify-normal items-center">
        <h1 className="font-bold text-2xl text-slate-700">{title}</h1>
        <TabButtons data={tabs} active={active} setActive={setActive} />
      </div>
      <ScrollView data={lists} loading={loading} />
    </div>
  );
};

export default DisplaySection;
