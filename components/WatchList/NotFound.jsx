"use client";

import React from "react";

const NotFound = ({ title }) => {
  return (
    <div className="flex flex-col items-center">
      <img
        src="https://img.freepik.com/premium-vector/nothing-here-flat-illustration_418302-77.jpg"
        alt="Empty Bookmarks"
        className="w-[450px] mb-4"
      />
      <p className="text-darkBlue font-bold  text-2xl text-center ">
        Nothing to show! Add to your {title}.
      </p>
    </div>
  );
};

export default NotFound;
