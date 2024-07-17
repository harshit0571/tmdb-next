"use client";
import { useAuth } from "@/context/AuthContext";
import { useFavorites } from "@/context/FavouritesContext";

const Hello = () => {
  const { user } = useAuth();
  const { favorites } = useFavorites();
  console.log(user, favorites);
  return <div>Hello</div>;
};

export default Hello;
