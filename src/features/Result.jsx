import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CalcWinner } from "../GameLogic";
import Item from "./item/Item";
import { selectItem } from "./item/itemSlice";
import { decrement, increment } from "./score/scoreSlice";
import { setStage } from "./stageSlice";
// sound effects
import click from "../assets/sound-effects/click.wav";
import win from "../assets/sound-effects/win.wav";
import lose from "../assets/sound-effects/lose.wav";
import draw from "../assets/sound-effects/draw.wav";

function Result() {
  const dispatch = useDispatch();
  const item = useSelector(selectItem);
  const [result, setResult] = useState("");
  const [winText, setWinText] = useState("");
  const [winAnimation, setWinAnimation] = useState({
    player: "none",
    house: "none",
  });
  // determine the winner when the component renders
  useEffect(() => {
    CalcWinner(item).then((res) => {
      setResult(res);
      if (res.winner === "player") {
        setWinText("you win");
        setWinAnimation({ ...winAnimation, house: "none" });
        setWinAnimation({ ...winAnimation, player: "win" });
        dispatch(increment());
        new Audio(win).play();
      } else if (res.winner === "house") {
        setWinText("you lose");
        setWinAnimation({ ...winAnimation, player: "none" });
        setWinAnimation({ ...winAnimation, house: "win" });
        dispatch(decrement());
        new Audio(lose).play();
      } else {
        setWinText("draw");
        new Audio(draw).play();
      }
    });
  }, []);
  // animate restult text
  const animation = {
    visible: "opacity-full",
    invisible: "opacity-0",
  };
  return (
    <div className="mt-36 relative">
      <div className="flex justify-center w-4/5 mx-auto ">
        {/* player pick */}
        <div className="flex flex-col items-center text-white uppercase tracking-widest">
          <Item item={item} winAnimation={winAnimation.player} />
          <p>You Picked</p>
        </div>
        {/* spread animation */}
        <div
          className={`transition-width ${
            result ? "w-full" : "w-0"
          } duration-1500 hidden lg:block`}
        ></div>
        {/* house pick */}
        <div className="relative">
          <div
            className={`flex flex-col items-center text-white uppercase tracking-widest absolute ${
              result ? "opacity-full" : "opacity-0"
            }`}
          >
            <Item
              item={result ? result.housePick : ""}
              winAnimation={winAnimation.house}
            />
            <p>The House Picked</p>
          </div>
          <div
            className={`flex flex-col items-center text-white uppercase tracking-widest ${
              result ? "opacity-0" : "opacity-full"
            }`}
          >
            <div
              className={`flex m-8 mt-0 items-center justify-center rounded-full w-32 h-32 lg:w-52 lg:h-52 lg:order-5 lg:mt-10`}
            >
              <div className="flex justify-center items-center bg-black opacity-30 w-4/5 h-4/5 rounded-full"></div>
            </div>
            <p>The House Picked</p>
          </div>
        </div>
      </div>
      {/* result */}
      <div
        className={`flex flex-col justify-center items-center m-4 w-60 mx-auto mt-10 ${
          result ? animation.visible : animation.invisible
        } transition duration-1500 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-1/2 lg:-translate-x-1/2`}
      >
        <h1 className="text-5xl uppercase text-white font-bold tracking-widest">
          {result ? winText : "hi B*tch"}
        </h1>
        <button
          className="w-full bg-white text-darkText uppercase tracking-widest p-2 rounded-lg mt-5"
          onClick={() => {
            new Audio(click).play();
            dispatch(setStage(0));
          }}
        >
          play again
        </button>
      </div>
    </div>
  );
}

export default Result;
