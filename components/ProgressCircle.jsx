"use client";

import React from "react";
import { getPathColor } from "../utils";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressCircle = ({ percentage,color="white" , w="w-[50px]",bg="none"}) => {
  return (
    <div className={w+" text-white font-bold rounded-full bg-"+bg}>
    <CircularProgressbar
      value={percentage}
      text={`${percentage}%`}
      className=""
      styles={buildStyles({
        strokeLinecap: "butt",
        textSize: "25px",
        pathColor: getPathColor(percentage),
        textColor: color,
        trailColor: "#d6d6d6",
        backgroundColor: bg,
      })}
    />
    </div>
  );
};

export default ProgressCircle;
