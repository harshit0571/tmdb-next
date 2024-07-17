"use client";

import React, { useEffect } from "react";
import { useFavorites } from "../context/FavouritesContext";
import NotFound from "../components/WatchList/NotFound";
import SavedCard from "../components/WatchList/Savedcard";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const { favorites, removeFavourite } = useFavorites();
  const { user } = useAuth();
  const navigation = useNavigate();

  useEffect(() => {
    const checkUser = () => {
      if (!user) {
        navigation("/login");
      }
    };
    checkUser();
  }, [user]);
  return (
    <div className="p-4 flex flex-col items-center min-h-[400px] md:min-h-[700px]">
      <div className="flex items-center mb-4">
        <i className="fa fa-heart text-xl text-red-500 mr-2"></i>
        <h1 className="text-2xl font-bold">My Favorites</h1>
      </div>
      {favorites.length === 0 ? (
        <NotFound title="Favourites" />
      ) : (
        <ul className="space-y-4 w-full flex justify-center items-center flex-col">
          {favorites.map((favorite) => (
            <SavedCard
              key={favorite.id}
              card={favorite}
              removeCard={removeFavourite}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
