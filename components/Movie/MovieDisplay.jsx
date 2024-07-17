"use client";

import React, { useEffect, useState } from "react";
import PosterCard from "../Common/PosterCard";
import Info from "../Common/Info";

const MovieDisplay = ({ movie, providers }) => {
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
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
  };
  return (
    <div
      className="w-full bg-darkBack p-5 md:p-10 mb-5  background-bottom-right relative flex justify-center items-center"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
      }}
    >
      <div className="w-[100%] lg:w-[80%] xl:w-[70%] flex h-max md:gap-10 md:flex-row flex-col items-center">
        <div
          className="w-full p-2 md:p-0 md:w-max moviecard bg-cover"
          style={isScreenSmall ? backgroundImageStyle : {}}
        >
          <PosterCard
            provider_logo={
              providers?.buy?.length > 0 && providers?.buy[0]?.logo_path
            }
            provider_name={
              providers?.buy?.length > 0 && providers?.buy[0]?.provider_name
            }
            poster_path={movie.poster_path}
          />
        </div>
        <Info
          title={movie.original_title}
          date={movie.release_date}
          genres={movie.genres}
          runtime={movie.runtime}
          percentage={Math.round(movie.vote_average * 10 || 10)}
          tagline={movie.tagline}
          overview={movie.overview}
          id={movie.id}
          img={movie.poster_path}
          type="movie"
        />
      </div>
    </div>
  );
};

export default MovieDisplay;
