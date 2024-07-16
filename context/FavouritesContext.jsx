"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  console.log(children)

  useEffect(() => {
    const fetchFavorites = () => {
      const storedFavorites = localStorage.getItem("favorites");
      if (storedFavorites) {
        setFavorites(JSON.parse(storedFavorites));
      }
    };
    fetchFavorites();
  }, []);

  const addFavourite = (favorite) => {
    const updatedFavorites = [...favorites, favorite];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const removeFavourite = (id) => {
    const updatedFavorites = favorites.filter((favorite) => favorite.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const favouriteExists = (id) => {
    return favorites.some((favorite) => favorite.id === id);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        setFavorites,
        addFavourite,
        removeFavourite,
        favouriteExists,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
