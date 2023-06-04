import React from "react";
import { Link } from "react-router-dom";

const GuidetoHack = () => {
  return (
      <div className="text h-48 Center flex flex-col items-center bg-gradient-to-r">
        <button className="bg-red-100">
          <Link to="/hackathons" className="text-xl p-10 bg-emerald-400 text-white rounded-full px-20 ">Find Hackathons Near Me</Link>
        </button>
    </div>
  );
};

export default GuidetoHack;
