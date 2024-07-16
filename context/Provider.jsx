// providers.js
"use client";
import React from "react";
import AuthProvider from "@/context/AuthContext";
import BookmarksProvider from "@/context/BookmarksContext";
import FavoritesProvider from "@/context/FavouritesContext";
import PersonProvider from "@/context/PersonContext";

const Providers = ({ children }) => {
  return (
    <AuthProvider>
      <BookmarksProvider>
        <FavoritesProvider>
          <PersonProvider>{children}</PersonProvider>
        </FavoritesProvider>
      </BookmarksProvider>
    </AuthProvider>
  );
};

export default Providers;
