import React from "react";
import { useSelector } from "react-redux";
import { selectScore } from "./scoreSlice";
function Score() {
  const score = useSelector(selectScore);
  return (
    <div className="flex flex-col justify-center items-center bg-white w-1/3 lg:w-3/12 rounded-lg p-2">
      <h2 className="text-scoreText lg: text-[18px] uppercase m-0">Score</h2>
      <p className="text-darkText text-3xl lg:text-5xl md:text-5xl m-0 font-bold leading-6">
        {score}
      </p>
    </div>
  );
}

export default Score;
