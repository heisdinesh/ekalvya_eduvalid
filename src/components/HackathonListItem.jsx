import React from "react";
import Tile from "./Tile";
import axios from "axios";
import { useState, useEffect } from "react";

const HackathonListItem = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000")
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="h-screen bg-gradient-to-r">
      <div className="bg-gradient-to-r py-10 h-auto">
        <p className="text-center font-medium text-5xl pt-16 text-black">
          Hackathons
        </p>
        <div className="pt-16 flex flex-wrap gap-7 justify-center">
          {data.map((item, index) => {
            return (
              // <p>{item.hackathonLink}</p>
              <Tile
                key={index}
                name={item.hackathonName}
                link={item.hackathonLink}
                date={item.hackathonLink}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HackathonListItem;
