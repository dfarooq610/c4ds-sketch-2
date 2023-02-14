import { generateJusticeSummary, Justice, JUSTICES } from "../services/Justice";
import { useState } from "react";
import JusticeSelector from "./Swiper/JusticeSelector";
import Swiper from "swiper";

const Article = () => {
  const [currentJustice, setCurrentJustice] = useState<Justice | null>(
    JUSTICES[0]
  );
  const [partisanIndex, setPartisanIndex] = useState<number | null>(null);
  const [showResults, setShowResults] = useState<boolean>(false);

  return (
    <div>
      <JusticeSelector
        onSlideTransition={(swiper: Swiper) =>
          setCurrentJustice(JUSTICES[swiper.realIndex])
        }
        percievedPartisanIndex={partisanIndex}
      />
      {currentJustice && (
        <div className="text-center align-middle justify-center mt-4 mb-2">
          <h2 className="font-josefin-sans font-bold text-2xl">{currentJustice.name}</h2>
          <p className="font-cardo text-lg max-w-prose m-auto">
            {generateJusticeSummary(currentJustice)}
          </p>
        </div>
      )}
      
      {partisanIndex && <h1>HELLO</h1>}
    </div>
  );
};

export default Article;
