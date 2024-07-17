"use client";

import React, { useState } from "react";
import { usePerson } from "../../context/PersonContext";
import ProgressCircle from "../ProgressCircle";

const PersonContainer = () => {
  const { person } = usePerson();
  const [showFullBio, setShowFullBio] = useState(false);
  const toggleBio = () => {
    setShowFullBio(!showFullBio);
  };
  return (
    <div className="flex flex-col lg:flex-row w-full lg:w-[90%] mb-10 mt-10 xl:w-[75%] mx-auto">
      <img
        src={`https://image.tmdb.org/t/p/original${person?.profile_path}`}
        className="w-[200px] m-auto md:w-[300px] h-auto md:h-[450px] rounded-lg mb-6 lg:mb-0 lg:mr-6"
        alt={`${person?.name}`}
      />
      <div className="flex h-auto lg:h-[450px] overflow-auto flex-col w-full lg:w-[80%] mx-auto p-4 bg-white shadow-lg rounded-lg">
        <p className="text-3xl font-bold mb-4 text-center md:text-left">
          {person?.name}
        </p>
        <div className="mt-2">
          <p className="text-xl py-2 font-semibold">Biography</p>
          {person?.biography.length > 200 ? (
            <>
              <p className="text-justify leading-relaxed">
                {showFullBio
                  ? person?.biography
                  : `${person?.biography.slice(
                      0,
                      200
                    )}...`}
              </p>
              <button onClick={toggleBio} className="text-blue-400">
                {showFullBio ? "Read Less" : "Read More"}
              </button>{" "}
            </>
          ) : (
            <p className="text-justify leading-relaxed">{person?.biography}</p>
          )}
        </div>
        <div className="py-10  border-t border-gray-200">
          <div className="flex items-center gap-4 mb-4">
            <span className="font-semibold">Popularity:</span>
            <ProgressCircle
              percentage={Math.round(person?.popularity)}
              color="black"
            />
          </div>
          <p className="mb-2">
            <span className="font-semibold">Known for:</span>{" "}
            {person?.known_for_department}
          </p>
          <p>
            <span className="font-semibold">Place of Birth:</span>{" "}
            {person?.place_of_birth}
          </p>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default PersonContainer;
