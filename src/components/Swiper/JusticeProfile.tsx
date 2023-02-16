import {
  interpolatePoliticalSpectrum,
  POLITICAL_RED,
} from "../../services/Color";
import { Justice } from "../../services/Justice";
// ${interpolatePoliticalSpectrum(perceivedPartisanIndex)}
interface JusticeProfileProps {
  selected: boolean;
  justice: Justice;
  perceivedPartisanIndex: number;
}

const JusticeProfile = ({
  selected,
  justice,
  perceivedPartisanIndex,
}: JusticeProfileProps) => {
  return (
    <div>
      <img
        src={justice.imageLink}
        className={"m-auto rounded-full object-cover lg:border-[1rem] border-8 border-solid"}
        // tailwind is limited in that it cannot easily handle dynamic colors (since styles are compile time generated)
        style={{
          borderColor: selected
            ? interpolatePoliticalSpectrum(perceivedPartisanIndex)
            : "transparent",
          opacity: selected ? 1 : 0.3,
        }}
      />
    </div>
  );
};

export default JusticeProfile;
