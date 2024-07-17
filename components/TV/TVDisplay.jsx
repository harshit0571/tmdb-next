"use client";

import React, { useEffect, useState } from "react";
import PosterCard from "../Common/PosterCard";
import Info from "../Common/Info";

const MovieDisplay = ({ tv, providers }) => {
  const [isScreenSmall, setIsScreenSmall] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSmall(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/original/${tv.backdrop_path})`,
  };
  return (
    <div
      className="w-full bg-darkBack p-5 md:p-10 mb-5  background-bottom-right relative flex justify-center items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/original/${tv.backdrop_path})`,
      }}
    >
      <div className="w-[100%] lg:w-[80%] xl:w-[70%] flex h-max md:gap-10 md:flex-row flex-col items-center">
        <div
          className="w-full md:w-max moviecard bg-cover"
          style={isScreenSmall ? backgroundImageStyle : {}}
        >
          <PosterCard
            provider_logo={
              providers?.buy?.length > 0 && providers?.buy[0]?.logo_path
            }
            provider_name={
              providers?.buy?.length > 0 && providers?.buy[0]?.provider_name
            }
            poster_path={tv.poster_path}
          />
        </div>
        <Info
          title={tv.name}
          date={tv.first_air_date}
          genres={tv.genres}
          runtime={tv.runtime || "154"}
          percentage={Math.round(tv.vote_average * 10 || 10)}
          tagline={tv.tagline}
          overview={tv.overview}
          id={tv.id}
          img={tv.poster_path}
          type="tv"
        />
      </div>
    </div>
  );
};

export default MovieDisplay;
