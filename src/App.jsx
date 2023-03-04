import PickItems from "./features/PickItems";
import Result from "./features/Result";
import Score from "./features/score/Score";
// redux imports
import { useDispatch, useSelector } from "react-redux";
import { selectStage } from "./features/stageSlice";
import { useEffect, useState } from "react";
import { setScore } from "./features/score/scoreSlice";

function App() {
  const dispatch = useDispatch();
  // loading the score on render
  useEffect(() => {
    const score = parseInt(localStorage.getItem("score"));
    if (isNaN(score)) {
      dispatch(setScore(0));
    } else {
      dispatch(setScore(score));
    }
  }, []);

  const stage = useSelector(selectStage);
  // style states
  const [rules, setRules] = useState(false);
  return (
    <div className="App container h-screen flex flex-col overflow-hidden">
      {/* App Logo/Score */}
      <header className="flex justify-center">
        <div className="flex justify-between mt-6 w-3/4 lg:w-1/2 p-3 border-2 border-solid border-headerOutline rounded-lg">
          <div className="w-1/3 p-1 flex items-center">
            <img src="./logo.svg" alt="logo" />
          </div>
          <Score />
        </div>
      </header>
      {/* Pick/Result section */}
      {stage === 0 ? <PickItems /> : stage === 1 ? <Result /> : ""}
      {/* footer/rules */}
      <div className="flex flex-1 flex-col items-center justify-end">
        {/* rules section */}
        <div className="flex justify-center  lg:self-end">
          <div
            className={`${
              rules ? "flex" : "hidden"
            } flex-col fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full h-full justify-center items-center bg-white lg:w-96 lg:h-96 p-10 rounded-lg`}
          >
            {/* header */}
            <h1 className="uppercase mb-24 lg:mb-5 text-4xl font-bold text-darkText lg:self-start">
              rules
            </h1>
            {/* rules */}
            <img
              className="w-96 relative"
              src="./image-rules.svg"
              alt="rules"
            />
            {/* close icon */}
            <button
              className="mt-24 lg:absolute lg:-top-14 lg:right-10"
              onClick={() => setRules(false)}
            >
              <img src="./icon-close.svg" alt="close" />
            </button>
          </div>
          <button
            className="text-white tracking-widest border p-2 px-8 rounded-lg text-xl font-thin uppercase lg:mr-9"
            onClick={() => setRules(true)}
          >
            rules
          </button>
        </div>
        {/* footer */}
        <div className="flex justify-center text-white pb-5 mt-4">
          <p>
            Challenge by{" "}
            <a
              className="text-rockGradientFrom"
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a
              className="text-rockGradientFrom"
              href="https://twitter.com/8xMohab"
              target="_blank"
            >
              <span> 8xMohab</span>
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
