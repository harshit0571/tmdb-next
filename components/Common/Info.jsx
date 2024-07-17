"use client";

import React from "react";
import { convertMinutesToHoursAndMinutes } from "@/utils";
import ProgressCircle from "../ProgressCircle";
import { useBookmark } from "@/context/BookmarksContext";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useFavorites } from "@/context/FavouritesContext";
import { FaBookmark, FaHeart, FaPlay } from "react-icons/fa";

const MovieInfo = ({
  title,
  date,
  genres,
  runtime,
  percentage,
  tagline,
  overview,
  id,
  img,
  type,
}) => {
  const { user } = useAuth();
  const { addBookmark, removeBookmark, bookmarkExists } = useBookmark();
  const { addFavourite, removeFavourite, favouriteExists } = useFavorites();
  const navigate = useRouter();

  return (
    <div className="flex-col gap-4 w-[100%] lg:w-[80%] text-white py-10">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-baseline flex-col md:flex-row mb-4 md:mb-0">
          <h1 className="text-white text-4xl">{title}</h1>
          <p className="text-gray-200 text-4xl font-400">
            ({date?.split("-")[0]})
          </p>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-slate-400 py-1 text-xs px-2 border-2 border-slate-400">
            PG - 13
          </span>
          <p>{date} (IN)</p>
          <div className="flex gap-1 justify-baseline">
            {genres?.map((genre, index) => (
              <span key={index}>
                {genre.name}
                {index !== genres.length - 1 && ","}
              </span>
            ))}
          </div>
          <p>{convertMinutesToHoursAndMinutes(runtime)}</p>
        </div>
      </div>
      <div className="flex mt-6 items-center gap-2 flex-wrap">
        <ProgressCircle percentage={percentage} />
        <div className="flex flex-col font-bold">
          <span>User</span> <span>Score</span>
        </div>
        <div className="py-1 cursor-pointer px-3 mx-3 text-blue-500 hover:text-blue-400">
          What's your <span className="border-b-2 border-blue-800">Vibe</span>?
        </div>
      </div>
      {user ? (
        <div className="flex gap-6 mt-6 px-2 items-center cursor-pointer">
          {bookmarkExists(id) ? (
            <FaBookmark
              className="text-red-500 hover:text-teal-400"
              aria-hidden="true"
              onClick={() => removeBookmark(id)}
            />
          ) : (
            <FaBookmark
              className="text-white hover:text-teal-400"
              aria-hidden="true"
              onClick={() =>
                addBookmark({
                  name: title,
                  date: date,
                  overview: overview,
                  id: id,
                  img: img,
                  media_type: type,
                })
              }
            />
          )}
          {favouriteExists(id) ? (
            <FaHeart
              className="text-red-500 hover:text-teal-400"
              aria-hidden="true"
              onClick={() => removeFavourite(id)}
            />
          ) : (
            <FaHeart
              className="text-white hover:text-teal-400"
              aria-hidden="true"
              onClick={() =>
                addFavourite({
                  name: title,
                  date: date,
                  overview: overview,
                  id: id,
                  img: img,
                  media_type: type,
                })
              }
            />
          )}
   <div className="flex items-center">
            <FaPlay
              className="mx-2 text-white hover:text-teal-400"
              aria-hidden="true"
            />
            <p> Play Trailer</p>
          </div>
        </div>
      ) : (
        <div className="flex gap-6 mt-6 px-2 items-center cursor-pointer">
          <FaBookmark
            className="text-white hover:text-teal-400"
            aria-hidden="true"
            onClick={() => navigate.push("/login")}
          />
          <FaHeart
            className="text-white hover:text-teal-400"
            aria-hidden="true"
            onClick={() => navigate.push("/login")}
          />

          <div className="flex items-center">
            <FaPlay
              className="mx-2 text-white hover:text-teal-400"
              aria-hidden="true"
            />
            <p> Play Trailer</p>
          </div>
        </div>
      )}

      <div className="flex flex-col mt-4 md:px-2 gap-2">
        <p className="italic text-gray-300">{tagline}</p>
        <p className="text-xl">Overview</p>
        <p className="text-gray-300">{overview}</p>
      </div>
    </div>
  );
};

export default MovieInfo;
