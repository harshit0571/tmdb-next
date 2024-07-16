import React, { useEffect, useState } from "react";

const CastCard = ({ profile_path, name, character }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="flex rounded-xl shadow-md flex-col hover:shadow-lg hover:bg-gray-100 gap-5 border-2 border-gray-200 w-[150px] card-transition mb-6 min-h-[300px]">
      <div className="relative bg-no-repeat bg-cover bg-center object-cover object-center rounded-xl w-full">
        {isLoading && (
          <div className="flex flex-col gap-10 bg-gray-500  rounded-t-xl min-w-[138px] w-full h-[175px">
           
          </div>
        )}
        <img
          src={
            profile_path
              ? "https://image.tmdb.org/t/p/original/" + profile_path
              : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
          }
          className=" rounded-t-xl min-w-[138px] w-full h-[175px]"
        />
        
      </div>

      <div className="px-2">
        <p className="font-bold">{name}</p>
        <p className="text-gray-400 text-sm">{character}</p>
      </div>
    </div>
  );
};

export default CastCard;
