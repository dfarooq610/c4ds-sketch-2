import { Justice } from "../../services/Justice";

interface JusticeProfileProps {
  selected: boolean;
  justice: Justice;
  perceivedPartisanIndex: number | null;
}

const JusticeProfile = ({ selected, justice }: JusticeProfileProps) => {
  return (
    <div>
      <img
        src={justice.imageLink}
        className={`m-auto rounded-full object-cover border-8 border-solid ${
          selected ? "border-stone-500" : "border-transparent"
        }`}
      />
    </div>
  );
};

export default JusticeProfile;
