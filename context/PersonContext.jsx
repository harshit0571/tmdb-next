"use client";

import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "next/navigation";

const PersonContext = createContext();
export const usePerson = () => {
  return useContext(PersonContext);
};
const PersonProvider = ({ children }) => {
  const { id } = useParams();
  const [person, setPerson] = useState(null);
  const [personCredits, setPersonCredits] = useState(null);

  const getLists = async (api, setState) => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/${api}&api_key=${
          process.env.VITE_TMDB_KEY
        }`
      );
      setState(res.data);
    } catch (error) {
      console.error("Error fetching the list:", error);
    }
  };
  console.log(person);
  useEffect(() => {
    const getData = async () => {
      await getLists(`person/${id}?language=en-US`, setPerson);
      await getLists(
        `person/${id}/combined_credits?language=en-US`,
        setPersonCredits
      );
    };
    getData();
  }, []);
  return (
    <PersonContext.Provider value={{ person, personCredits }}>
      {children}
    </PersonContext.Provider>
  );
};

export default PersonProvider;
