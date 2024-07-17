"use client";

import React from "react";
import { useAuth } from "@/context/AuthContext";
import { Link } from "next";

const footerData = [
  {
    title: "THE BASICS",
    items: [
      "About TMDB",
      "Contact Us",
      "Support Forums",
      "API",
      "System Status",
    ],
  },
  {
    title: "GET INVOLVED",
    items: ["Contribution Bible", "Add New Movie", "Add New TV Show"],
  },
  {
    title: "COMMUNITY",
    items: ["Guidelines", "Discussions", "Leaderboard"],
  },
  {
    title: "LEGAL",
    items: [
      "Terms Of Use",
      "API Terms of Use",
      "Privacy Policy",
      "DMCA Policy",
    ],
  },
];

const Footer = () => {
  const { user } = useAuth();

  return (
    <div className="bg-darkBlue w-full h-max p-10 gap-10 bottom-0 flex md:flex-row flex-col justify-center items-center">
      <div className="flex flex-col gap-6">
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
          className="w-[150px]"
          alt="TMDB Logo"
        />
        <div className="py-2 px-5 cursor-pointer bg-white w-max rounded-lg text-cl text-cyan-400 font-bold">
          {user ? "Hi " + user + "!" : <Link href="login">Login</Link>}
        </div>
      </div>
      <div className="flex md:flex-row flex-wrap gap-10">
        {footerData.map((section, index) => (
          <div key={index} className="flex flex-col text-white">
            <h1 className="font-bold text-xl">{section.title}</h1>
            {section.items.map((item, idx) => (
              <p key={idx}>{item}</p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
