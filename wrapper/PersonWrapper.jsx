import React from "react";
import PersonProvider from "../context/PersonContext";
import Person from "../pages/Person";

const PersonWrapper = () => {
  return (
    <PersonProvider>
      <Person />
    </PersonProvider>
  );
};

export default PersonWrapper;
