interface JusticeProfileProps {
  selected: boolean;
  imageLink: string;
}

const JusticeProfile = ({ selected, imageLink }: JusticeProfileProps) => {
  return (
      <img
        src={imageLink}
        className={`rounded-full w-3/5 h-3/5 object-cover ${
          selected ? "border-8 border-solid border-stone-500" : ""
        }`}
      />
  );
};

export default JusticeProfile;
