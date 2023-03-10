import { generateJusticeSummary, Justice, JUSTICES } from "../services/Justice";
import { useState } from "react";
import JusticeSelector from "./Swiper/JusticeSelector";
import Swiper from "swiper";
import { Results } from "./Results/Results";

const Article = () => {
  const [currentJustice, setCurrentJustice] = useState<Justice>(JUSTICES[0]);
  const [partisanIndex, setPartisanIndex] = useState<number>(50);
  const [showResults, setShowResults] = useState<boolean>(false);
  return (
    <div className="font-josefin-sans">
      <JusticeSelector
        onSlideTransition={(swiper: Swiper) => {
          setCurrentJustice(JUSTICES[swiper.realIndex]);
          setPartisanIndex(50);
          setShowResults(false);
        }}
        percievedPartisanIndex={partisanIndex}
      />
      <div className="text-center align-middle justify-center mt-4 mb-2">
        <h2 className="font-bold text-2xl">{currentJustice.name}</h2>
        <p className="font-cardo text-lg max-w-prose m-auto">
          {generateJusticeSummary(currentJustice)}
        </p>
      </div>
      <div className="mx-auto my-5 max-w-prose flex-col justify-center align-baseline">
        <input
          type="range"
          step={0.5}
          min={0}
          max={100}
          disabled={showResults}
          value={partisanIndex}
          // political blue and red exports from Color.ts -- could not figure out how to template styles as variables in tailwind
          className="slider w-full h-5 bg-gradient-to-r from-[#244999] via-stone-400 to-[#d22532] rounded-lg appearance-none cursor-pointer m-auto"
          onChange={(e) => {
            setPartisanIndex(Number(e.target.value));
          }}
        ></input>
        <div className="flex justify-between align-middle">
          <p className="text-center mr-2">Liberal</p>
          <p className="text-center ml-2">Conservative</p>
        </div>
      </div>
      {!showResults ? (
        <div className="font-josefin-sans flex my-10 justify-center items-baseline">
          <button
            className="bg-stone-600 text-stone-100 rounded-lg px-5 text-2xl py-2 mx-5 border-stone-900 border-2 hover:bg-stone-700 active:bg-stone-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={() => {
              setPartisanIndex(50);
            }}
          >
            Reset Slider
          </button>
          <button
            className="bg-stone-600 text-stone-100 rounded-lg px-5 text-2xl py-2 mx-5 border-stone-900 border-2 hover:bg-stone-700 active:bg-stone-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={() => {
              setShowResults(true);
            }}
          >
            Submit Guess
          </button>
        </div>
      ) : (
        <Results
          justice={currentJustice}
          chosenPartisanIndex={partisanIndex}
          resetButtonHandler={() => {
            setShowResults(false);
            setPartisanIndex(50);
          }}
        />
      )}
    </div>
  );
};

export default Article;
