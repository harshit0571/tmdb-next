"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

const BookmarksContext = createContext();
export const useBookmark = () => {
  return useContext(BookmarksContext);
};
const BookmarksProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState([]);

  useEffect(() => {
    const fetchBookmarks = () => {
      const storedBookmarks = localStorage.getItem("bookmarks");
      if (storedBookmarks) {
        setBookmarks(JSON.parse(storedBookmarks));
      }
    };
    fetchBookmarks();
  }, []);

  const addBookmark = (bookmark) => {
    const updatedBookmarks = [...bookmarks, bookmark];
    setBookmarks(updatedBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
  };
  const removeBookmark = (id) => {
    const updatedBookmarks = bookmarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookmarks(updatedBookmarks);
    localStorage.setItem("bookmarks", JSON.stringify(updatedBookmarks));
  };
  const bookmarkExists = (id) => {
    console.log("exist", id);
    console.log(bookmarks.some((bookmark) => bookmark.id === id))
    return bookmarks.some((bookmark) => bookmark.id === id);
  };

  return (
    <BookmarksContext.Provider
      value={{
        bookmarks,
        setBookmarks,
        addBookmark,
        removeBookmark,
        bookmarkExists,
      }}
    >
      {children}
    </BookmarksContext.Provider>
  );
};

export default BookmarksProvider;
