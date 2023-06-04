import React from "react";
import Card from "./Card";

const Badges = () => {
  return (
    <div className="h-auto text-white bg-gradient-to-r from-pinky to-bluey py-40 ">
      <div>
        <p className="text-center font-medium text-5xl pt-16 text-black">
          Learnings
        </p>
        <div className="mx-8  pt-16 flex flex-wrap gap-4 justify-center">
          <Card skill="React" />
          <Card skill="Express" />
          <Card skill="MongoDB" />
        </div>
      </div>
    </div>
  );
};

export default Badges;
