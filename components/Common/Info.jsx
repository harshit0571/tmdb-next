import React from "react";
import { convertMinutesToHoursAndMinutes } from "../../utils";
import ProgressCircle from "../ProgressCircle";
import { useBookmark } from "../../context/BookmarksContext";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useFavorites } from "../../context/FavouritesContext";

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
  console.log(genres);
  const { user } = useAuth();
  const { addBookmark, removeBookmark, bookmarkExists } = useBookmark();
  const { addFavourite, removeFavourite, favouriteExists } = useFavorites();
  const navigate = useNavigate();

  return (
    <div className="flex-col gap-4 w-[100%] lg:w-[80%] text-white py-10">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2 items-baseline flex-col md:flex-row mb-4 md:mb-0">
          <h1 className="text-white text-4xl ">{title}</h1>
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
            {/* <i class="fa fa-circle text-xs" aria-hidden="true"></i> */}

            {genres?.map((genre, index) => (
              <span>
                {genre.name}
                {index != genres.length - 1 && ","}
              </span>
            ))}
            {/* <i class="fa fa-circle" aria-hidden="true"></i> */}
          </div>
          <p>{convertMinutesToHoursAndMinutes(runtime)}</p>
        </div>
      </div>
      <div className="flex mt-6 items-center gap-2 flex-wrap">
        <ProgressCircle percentage={percentage} />
        <div className="flex flex-col font-bold">
          <span>User</span> <span>Score</span>
        </div>
        <div className="py-1 cursor-pointer px-3 mx-3 bg-darkBlue hover:bg-blue-800">
          What's your <span className="border-b-2 border-blue-800">Vibe</span>?
        </div>
      </div>
      {user ? (
        <div className="flex gap-6 mt-6 px-2 items-center cursor-pointer">
          {bookmarkExists(id) ? (
            <i
              class="fa fa-bookmark p-3 px-4 rounded-full bg-darkBlue hover:text-teal-400 hover:bg-slate-600 cursor-pointer text-red-500"
              aria-hidden="true"
              onClick={() => {
                removeBookmark(id);
              }}
            ></i>
          ) : (
            <i
              class="fa fa-bookmark p-3 px-4 rounded-full bg-darkBlue hover:bg-slate-600  hover:text-teal-400 cursor-pointer"
              aria-hidden="true"
              onClick={() => {
                addBookmark({
                  name: title,
                  date: date,
                  overview: overview,
                  id: id,
                  img: img,
                  media_type: type,
                });
              }}
            ></i>
          )}
          {favouriteExists(id) ? (
            <i
              class="fa fa-heart p-3 rounded-full bg-darkBlue hover:bg-slate-600  hover:text-teal-400 text-red-500 cursor-pointer"
              aria-hidden="true"
              onClick={() => {
                removeFavourite(id);
              }}
            ></i>
          ) : (
            <i
              class="fa fa-heart p-3 rounded-full bg-darkBlue hover:bg-slate-600  hover:text-teal-400 cursor-pointer"
              aria-hidden="true"
              onClick={() => {
                addFavourite({
                  name: title,
                  date: date,
                  overview: overview,
                  id: id,
                  img: img,
                  media_type: type,
                });
              }}
            ></i>
          )}

          <div>
            <i class="fa fa-play mx-2" aria-hidden="true"></i>
            Play Trailer
          </div>
        </div>
      ) : (
        <div className="flex gap-6 mt-6 px-2 items-center cursor-pointer">
          <i
            class="fa fa-bookmark p-3 px-4 rounded-full bg-darkBlue hover:text-teal-400 hover:bg-slate-600 cursor-pointer "
            aria-hidden="true"
            onClick={() => {
              navigate("/login");
            }}
          ></i>
          <i
            class="fa fa-heart p-3 rounded-full bg-darkBlue hover:bg-slate-600  hover:text-teal-400 cursor-pointer"
            aria-hidden="true"
            onClick={() => {
              navigate("/login");
            }}
          ></i>

          <div>
            <i class="fa fa-play mx-2" aria-hidden="true"></i>
            Play Trailer
          </div>
        </div>
      )}

      <div className="flex flex-col mt-4 md:px-2 gap-2">
        <p className="italic text-gray-300">{tagline}</p>
        <p className="text-xl">Overview</p>
        <p className="text-gray-300">{overview}</p>
      </div>
      <div className="flex justify-between">
        <div className="flex-col">
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
