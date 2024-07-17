"use client";

import React from "react";
import oscar from "@/assets/oscar.svg";

export const Jumbotron = () => {
  return (
    <div className="w-[100%] lg:w-[90%] mb-10 xl:w-[75%]">
      <div className="flex flex-col p-5 justify-center items-center w-full py-10 gap-10 bg-[url('https://wallpapercave.com/wp/wp46542.jpg')] bg-no-repeat bg-cover bg-gray-400">
        <div className="flex flex-col p-5 justify-center md:items-start w-[100%] md:w-[95%] items-center gap-2 md:gap-0 text-center md:text-left md:mt-10 ">
          <h1 className="text-4xl md:text-5xl text-white font-bold ">
            Welcome.
          </h1>
          <p className="text-xl md:text-3xl text-white">
            Millions of movies, TV shows and people to discover. Explore now.
          </p>
        </div>
        <div className="w-full sm:flex-row flex-col items-center flex justify-center sm:items-baseline relative">
          <input
            type="text"
            className="w-[93%] py-3 rounded-3xl mb-[50px] outline-none pl-5 pr-7"
            placeholder="Search for a movie, tv show, person......."
          />
          <button className="bg-gradient py-3 px-6 static sm:absolute right-5 rounded-3xl text-white font-bold">
            Search
          </button>
        </div>
      </div>

      <div className="bg-blueGradient w-full flex flex-col p-10 gap-7 md:items-start items-center">
        <img
          src={"https://tmdb-beta-gray.vercel.app/assets/oscar-De4amE_r.svg"}
          className="w-[25%] min-w-[150px]"
        />
        <button className=" w-max p-2 px-4 text-white ring-2 ring-white rounded-3xl hover:ring-blue-400 hover:bg-white hover:text-blue-400">
          View the winners{" "}
          <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};
