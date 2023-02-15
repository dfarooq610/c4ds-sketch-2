import { generateJusticeSummary, Justice, JUSTICES } from "../services/Justice";
import { ChangeEvent, useState } from "react";
import JusticeSelector from "./Swiper/JusticeSelector";
import Swiper from "swiper";
import PartisanIndexSlider from "./PartisanIndexSelector/PartisanIndexSlider";

const Article = () => {
  const [currentJustice, setCurrentJustice] = useState<Justice>(JUSTICES[0]);
  const [partisanIndex, setPartisanIndex] = useState<number>(50);
  const [showResults, setShowResults] = useState<boolean>(false);

  return (
    <div>
      <JusticeSelector
        onSlideTransition={(swiper: Swiper) => {
          setCurrentJustice(JUSTICES[swiper.realIndex]);
          setPartisanIndex(50);
          setShowResults(false);
        }}
        percievedPartisanIndex={partisanIndex}
      />
      <div className="text-center align-middle justify-center mt-4 mb-2">
        <h2 className="font-josefin-sans font-bold text-2xl">
          {currentJustice.name}
        </h2>
        <p className="font-cardo text-lg max-w-prose m-auto">
          {generateJusticeSummary(currentJustice)}
        </p>
      </div>
      <div className="m-auto my-5 max-w-prose">
        <input
          type="range"
          step={0.5}
          value={partisanIndex}
          className="slider w-full h-3 bg-stone-500 rounded-lg appearance-none cursor-pointer"
          onChange={(e) => {
            setPartisanIndex(Number(e.target.value));
          }}
        ></input>
      </div>
      <div className="font-josefin-sans flex my-10 justify-center items-baseline">
        <button
          className="bg-stone-600 text-stone-100 rounded-lg px-5 text-2xl py-2 mx-5"
          onClick={() => {
            setShowResults(false);
            setPartisanIndex(50);
          }}
        >
          Reset
        </button>
        <button
          className="bg-stone-600 text-stone-100 rounded-lg px-5 text-2xl py-2 mx-5"
          onClick={() => {
            setShowResults(true);
          }}
        >
          Results
        </button>
      </div>
      {showResults && <h1 className="font-josefin-sans text-3xl text-center mt-10">LOREM IPSUM</h1>}
    </div>
  );
};

export default Article;
