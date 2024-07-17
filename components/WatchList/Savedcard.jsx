"use client";

import React from "react";
import { Link } from "next/link";

const SavedCard = ({ card, removeCard }) => {
  return (
    <li
      key={card.id}
      className="flex flex-col md:flex-row items-start p-4 bg-darkBlue rounded-lg shadow-md w-full md:w-[60%]"
    >
      <Link
        className="w-full m-auto flex flex-col md:flex-row items-start text-gray-100"
        href={"/" + card.media_type + "/" + card.id}
      >
        <img
          src={"https://image.tmdb.org/t/p/original/" + card.img}
          alt={card.name}
          className="w-full md:w-32 h-[350px] md:h-48 rounded-lg mb-4 md:mb-0"
        />
        <div className="md:ml-4">
          <h2 className="text-xl font-bold">{card.name}</h2>
          <p className="text-gray-300 text-sm">{card.date}</p>
          <p className="text-gray-200 mt-2">{card.overview}</p>
        </div>
      </Link>
      <div className="flex items-center py-2">
        {/* <i className="fa fa-heart text-red-500 mr-4 cursor-pointer"></i> */}
        <i
          className="fa fa-trash text-red-500 cursor-pointer"
          onClick={() => {
            removeCard(card.id);
          }}
        ></i>
      </div>
    </li>
  );
};

export default SavedCard;
