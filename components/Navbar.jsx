"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { FaSearch } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { FaHeart } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useFavorites } from "@/context/FavouritesContext";
import { useBookmark } from "@/context/BookmarksContext";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const { user, setUser } = useAuth();
  const [searchBar, setSearchBar] = useState(false);
  const [showSignOut, setShowSignOut] = useState(false);
  const navigate = useRouter();
  const { setFavorites } = useFavorites();
  const { setBookmarks } = useBookmark();
  const signOut = () => {
    setUser(null);
    localStorage.removeItem("user");
    localStorage.removeItem("bookmarks");
    localStorage.removeItem("favorites");
    setFavorites([]);
    setBookmarks([]);
  };

  return (
    <div className="w-full bg-darkBlue text-white flex flex-col items-center justify-center relative">
      <div className="w-[100%] lg:w-[85%] xl:w-[70%] flex md:justify-between p-3 md:items-baseline md:flex-row flex-col items-center justify-center md:gap-0 gap-5">
        <div className="flex items-center gap-5 md:flex-row flex-wrap justify-center">
          <div className="flex items-center ">
            <Link href="/">
              <p className="text-3xl bg-gradient-to-r from-cyan-500 to-cyan-300 tracking-wide font-bold text-transparent bg-clip-text bg-gradient cursor-pointer">
                TMDB{" "}
              </p>
            </Link>
            <span className="ml-4 inline-block w-[50px] h-5 bg-gradient-to-r from-cyan-500 to-cyan-300 rounded-lg"></span>
          </div>
        </div>

        <div className="flex gap-7 items-baseline text-xl ">
          <FaBookmark
            class="fa fa-bookmark hover:text-teal-400 cursor-pointer"
            aria-hidden="true"
            onClick={() => {
              user ? navigate.push("/watchlist") : navigate.push("/login");
            }}
          />
          <FaHeart
            class="fa fa-heart hover:text-teal-400 cursor-pointer"
            aria-hidden="true"
            onClick={() => {
              user ? navigate.push("/favourites") : navigate.push("/login");
            }}
          />
          {user ? (
            <div className="relative inline-block">
              <div
                className="bg-gray-400 h-[30px] w-[30px] min-h-[25px] min-w-[25px] text-xl rounded-full transition-all hover:bg-gradient text-center pt-[3px] text-white cursor-pointer flex items-center justify-center"
                onClick={() => setShowSignOut(!showSignOut)}
              >
                {user[0]}
              </div>
              {showSignOut && (
                <button
                  className="bg-red-500 text-white rounded-lg cursor-pointer absolute top-full mt-6 left-1/2 transform -translate-x-1/2 min-w-[80px] py-1 shadow-lg text-lg z-50"
                  onClick={() => {
                    signOut();
                  }}
                >
                  Sign Out
                </button>
              )}
            </div>
          ) : (
            <div className="bg-gradient px-2 rounded-lg cursor-pointer">
              <Link href="/login"> Login</Link>
            </div>
          )}

          {searchBar ? (
            <ImCross
              class="fa fa-times text-2xl text-blue-400 hover:text-teal-400 cursor-pointer"
              aria-hidden="true"
              onClick={() => {
                setSearchBar(!searchBar);
              }}
            />
          ) : (
            <FaSearch
              class="fa fa-search text-blue-400 text-2xl hover:text-teal-400 cursor-pointer"
              aria-hidden="true"
              onClick={() => {
                setSearchBar(!searchBar);
              }}
            />
          )}
        </div>
      </div>
      <div className="relative w-full">
        {searchBar && <SearchBar toggleBar={setSearchBar} />}
      </div>
    </div>
  );
};

export default Navbar;
