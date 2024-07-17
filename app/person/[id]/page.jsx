"use client";

import React from "react";
import PersonContainer from "@/components/Person/PersonContainer";
import ScrollPerson from "@/components/Person/ScrollPerson";

const Person = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <PersonContainer />
      <div className="lg:w-[90%] mb-10 mt-10 xl:w-[75%] w-full ">
        <h1 className="font-bold text-2xl pb-4 px-2">Known for</h1>
        <ScrollPerson />
      </div>
    </div>
  );
};

export default Person;