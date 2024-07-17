"use client";

import React from "react";
import { usePerson } from "@/context/PersonContext";
import PersonCard from "./PersonCard";
import Link from "next/link";

const ScrollPerson = () => {
  const { personCredits } = usePerson();

  return (
    <div className="w-full flex relative justify-start px-2 items-center transition-full duration-200">
      <div className="flex gap-5 overflow-auto pb-3 ">
        {personCredits?.cast?.map(
          (cast) =>
            cast.poster_path && (
              <Link href={cast?.title ? `/movie/${cast.id}` : `/tv/${cast.id}`}>
                <PersonCard cast={cast} key={cast.id} />
              </Link>
            )
        )}
      </div>
      <div className="absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-white pointer-events-none"></div>
    </div>
  );
};

export default ScrollPerson;
