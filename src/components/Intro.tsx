interface IntroProps {
  handleClick: () => void;
}

const Intro = ({ handleClick }: IntroProps) => {
  return (
    <section className="font-cardo text-xl text-center m-auto flex flex-col justify-center max-w-prose items-center">
      <img src="SCOTUS.png" />
      <p> The Supreme Court of the United States—the Third Branch of our 
        government of checks and balances—has long touted itself as an 
        apolitical institution. However, as we have seen over the past few 
        years—in recent confirmation hearings and decisions overturning 
        decades of precedent—the Court is anything but. The perceptions of 
        our justices are formed during these larger moments, as covered by 
        your favorite news network, paper, podcaster, or Twitter personality. 
        But their ideologies are shaped and revealed over a broad range of 
        time within minor—often technical and dense—cases, opinions, and 
        dissents that most of us have and will never hear of. 
      </p>
      <br />
      <p>
        So, just how partisan are our Supreme Court Justices?
      </p>
      <br />
      <div>
        {/* button transitions retrieved from https://tailwind-elements.com/docs/standard/components/buttons/ */}
        <button
          className="font-josefin-sans border-2 border-solid bg-stone-600 p-2 text-stone-100 rounded-full border-stone-900 max-w-fit active:bg-stone-700 active:shadow-lg transition duration-150 ease-in-out "
          onClick={handleClick}
        >
          {"> "} Let's find out
        </button>
      </div>
    </section>
  );
};

export default Intro;
