"use client";

import React, { useEffect, useLayoutEffect, useState } from "react";
import TVDisplay from "@/components/TV/TVDisplay";
import { useParams } from "next/navigation";
import axios from "axios";
import CastScrollView from "@/components/Common/CastScrollView";
import { removeDuplicates } from "@/utils";

const TV = () => {
  const { id } = useParams();
  const [tv, setTv] = useState({});
  const [providers, setProviders] = useState([]);
  const [casts, setCasts] = useState([]);
  const getLists = async (api, setState) => {
    console.log("res.data");

    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/${api}&api_key=${process.env.NEXT_PUBLIC_TMDB_KEY}`
      );
      console.log(res.data);
      setState(res.data);
    } catch (error) {
      console.error("Error fetching the list:", error);
    }
  };
  useEffect(() => {
    const getData = async () => {
      await getLists(`tv/${id}?language=en-US`, setTv);
      await getLists(`tv/${id}/watch/providers?language=en-U`, setProviders);
      await getLists(`tv/${id}/credits?language=en-U`, setCasts);
    };
    getData();
  }, []);
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="h-full w-full">
      <TVDisplay tv={tv} providers={providers?.results?.US} />
      <div className="w-[90%] md:w-[70%] m-auto">
        <p className=" text-2xl text-slate-700 py-3">Top Billed Cast</p>
        <CastScrollView casts={casts?.cast?.slice(0, 15)} />
      </div>
      <div className="w-[90%] md:w-[70%] m-auto">
        <p className=" text-2xl text-slate-700 py-3">Crew</p>
        <CastScrollView casts={removeDuplicates(casts?.crew || [])} />
      </div>
    </div>
  );
};

export default TV;
