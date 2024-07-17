"use client";
import React from "react";
import { Jumbotron } from "@/components/Jumbotron";
import DisplaySection from "@/components/ListContainer/DisplaySection";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Jumbotron />
      <DisplaySection
        title="Trending"
        tabs={[
          { name: "Today", api: "/trending/all/day?language=en-US" },
          { name: "This Week", api: "/trending/all/week?language=en-US" },
        ]}
      />

      <DisplaySection
        title="What's Popular"
        tabs={[
          { name: "Movies", api: "/movie/popular?language=en-US&page=1" },
          { name: "On tv", api: "/tv/popular?language=en-US&page=1" },
          {
            name: "For Rent",
            api: "/movie/now_playing?language=en-US&page=1",
          },
          {
            name: "In Theatre",
            api: "/movie/now_playing?language=en-US&page=1",
          },
        ]}
      />
      <DisplaySection
        title="Free to watch"
        tabs={[
          { name: "Movies", api: "/movie/upcoming?language=en-US&page=1" },
          { name: "TV", api: "/tv/airing_today?language=en-US&page=1" },
        ]}
      />
    </div>
  );
};

export default Home;