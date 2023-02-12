interface IntroProps {
  handleClick: () => void;
}

const Intro = ({ handleClick }: IntroProps) => {
  return (
    <section className="font-cardo text-xl text-center m-auto flex flex-col justify-center max-w-prose items-center">
      <img src="SCOTUS.png" />
      <p>
        Too often, we only let the big moments define our perception of public
        figures. For the Supreme Court Justices, that comes in the form of media
        coverage surrounding landmark decisions and the nomination process. Many
        will form their opinions based on talking points brought up by their
        favorite news network, their favorite podcaster, or Twitter personality.
        Despite the significance of these events, they do not tell the full
        story of the voting behavior of the Justices.
      </p>
      <br />
      <p>
        So, how well do you know the partisan leanings of recent Supreme Court
        Justices?
      </p>
      <br />
      <div>
        {/* button transitions retrieved from https://tailwind-elements.com/docs/standard/components/buttons/ */}
        <button
          className="font-josefin-sans border-2 border-solid bg-stone-600 p-2 text-stone-100 rounded-full border-stone-700 max-w-fit active:bg-stone-700 active:shadow-lg transition duration-150 ease-in-out "
          onClick={handleClick}
        >
          {"> "} Test your perceptions now
        </button>
      </div>
    </section>
  );
};

export default Intro;
