import React from "react";

const Tile = ({ name, link, date }) => {
  return (
    <div className="p-6 bg-bpink rounded-md m-3 w-72">
      <div className="flex flex-col justify-center h-full">
        <div className="px-10 p-10 py-10 m-2 rounded-md text-center text-2xl font-small">
          {name}
        </div>
        {/* <div className="bg-gray-200 px-10 p-10 py-6 m-2 rounded-md h-24 text-center flex flex-col justify-center">
          {date}
        </div> */}
        <a href={link}>
          <div className="bg-green-400 p-10 py-3 m-2 rounded-md text-center bottom-2">
            Link
          </div>
        </a>
      </div>
    </div>
  );
};

export default Tile;
