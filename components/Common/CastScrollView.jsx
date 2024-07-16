import React from "react";
import CastCard from "./CastCard";
import { Link } from "react-router-dom";
import Loaderscroll from "../LoaderScroll";

const CastScrollView = ({ casts }) => {
  return (
    <div className="w-full flex relative justify-start pr-5 items-center transition-full duration-200">
      <div className="flex gap-5 overflow-auto  ">
        {!casts && <Loaderscroll />}
        {casts?.map((cast) => (
          <Link to={`/person/${cast.id}`}>
            <CastCard
              profile_path={cast.profile_path}
              name={cast.name}
              character={cast.character || cast.job}
              key={cast.id}
            />
          </Link>
        ))}
      </div>
      <div className="absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-white pointer-events-none"></div>
    </div>
  );
};

export default CastScrollView;
