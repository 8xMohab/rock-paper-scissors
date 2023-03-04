import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectStage, setStage } from "../stageSlice";
import { setItem } from "./itemSlice";
import pick from "../../assets/sound-effects/click.wav";

// the item component takes an item from Items list as a prop and on click it dispatches that item to the "vlaue" in itemSlice.js .
function Item({ item, winAnimation }) {
  const stage = useSelector(selectStage);
  const dispatch = useDispatch();
  // backgrounds
  const background = {
    paper: "from-paperGradientFrom to-paperGradientFrom",
    rock: "from-rockGradientFrom to-rockGradientFrom",
    scissors: "from-scissorsGradientFrom to-scissorsGradientFrom",
  };
  const position = {
    0: `absolute ${item.position}`,
    1: "m-8 mt-0 lg:h-52 lg:w-52",
  };
  const scale = {
    none: "scale-0",
    win: "scale-100",
  };
  const handlePicking = () => {
    if (stage === 0) {
      // set the item to the user pick
      dispatch(setItem(item));
      // set stage to displaying result
      dispatch(setStage(1));
      // play click sound effect
      new Audio(pick).play();
    }
  };
  return (
    <div
      className={`bg-gradient-to-b ${
        background[item.name]
      } flex items-center justify-center rounded-full w-32 h-32 lg:w-36 lg:h-36 ${
        position[stage]
      } shadow-lowerEdge lg:order-5 ${stage === 0 ? "" : "lg:mt-10"}`}
      onClick={handlePicking}
    >
      <div className="flex justify-center items-center bg-white w-4/5 h-4/5 rounded-full shadow-upperEdge relative">
        <img
          className="m-0 w-2/5"
          src={`./icon-${item.name}.svg`}
          alt={item.name}
        />
        {/* animation divs */}
        <div
          className={`winner-animation w-200% bg-white h-200% ${stage === 1? scale[winAnimation] : "scale-0"} transition duration-500`}
        ></div>
        <div
          className={`winner-animation w-300% h-300% ${stage === 1? scale[winAnimation] : "scale-0"} transition duration-1000`}
        ></div>
        <div
          className={`winner-animation w-400% h-400% ${stage === 1? scale[winAnimation] : "scale-0"} transition duration-1500`}
        ></div>
      </div>
    </div>
  );
}

export default Item;
