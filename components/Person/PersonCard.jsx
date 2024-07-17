"use client";

import React from "react";

const PersonCard = ({ cast }) => {
  return (
    <div className="flex flex-col">
      {/* <img
        src={"https://image.tmdb.org/t/p/w300/" + cast.poster_path}
        className=" rounded-xl w-[130px] h-[195px] min-w-[130px]"
      /> */}

      <img
        src={"https://image.tmdb.org/t/p/w300/" + cast.poster_path}
        width={130}
        height={195}
        alt="Image Alt"
        className="min-w-[130px] min-h-[195px]"
      />
    </div>
  );
};

export default PersonCard;
