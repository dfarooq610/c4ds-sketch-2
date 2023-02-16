import {
  compareJusticePartisanship,
  convertToBailey,
  convertToMQ,
  getProfessionalJusticeName,
  Justice,
} from "../../services/Justice";

interface ResultsProps {
  chosenPartisanIndex: number;
  justice: Justice;
}

export const Results = ({ justice, chosenPartisanIndex }: ResultsProps) => {
  const hasConclusiveScore =
    justice.partisanIndex.mabScore !== 0 && justice.partisanIndex.mqScore !== 0;
  const titleText = compareJusticePartisanship(justice, chosenPartisanIndex);

  return (
    <section className="flex-row lg:w-3/4 mx-auto justify-center font-cardo lg:text-lg">
      <h1 className="font-josefin-sans mb-3 mt-10 text-2xl lg:text-3xl font-bold text-center">
        {titleText}
      </h1>
      <p>{justice.summary}</p>
      <br />
      {hasConclusiveScore && (
        <div>
          <h3 className="font-josefin-sans mb-3 text-xl font-bold">
            {`Quantifying ${getProfessionalJusticeName(
              justice
            )}'s Partisanship`}
          </h3>
          <p>
            There are a few different statistical measures that analyze the
            ideological leanings of the Supreme Court justices. The most well
            known and widely used is the Martin-Quinn (MQ) scale-developed by
            Andrew D. Martin and Kevin M. Quinn used to measure the political
            leanings of the justices over time. Another well-regarded measure is
            one employed by Michael A. Bailey. Both use Bayesian methodology,
            but Bailey's is slightly more involved.
          </p>
          <br />
          <h3 className="font-josefin-sans mb-3 text-xl font-bold">
            {`On the MQ Scale, you rated ${getProfessionalJusticeName(
              justice
            )} a ${convertToMQ(chosenPartisanIndex).toFixed(
              2
            )}, and they are actually a ${justice.partisanIndex.mqScore}`}
          </h3>
          <p>
            The MQ scale exists on a scale from -6 to 6 and is taken each term
            and is relative to the Court at the time. Therefore, for example, MQ
            shows a huge shift to the right in the early seventies when abortion
            was legalized and the death penalty was temporarily abolished. This
            gives a slightly skewed illustration of the ideology of the
            individual justices at the time.
          </p>
          <br />
          <h3 className="font-josefin-sans mb-3 text-xl font-bold">
            {`On the Bailey Scale, you rated ${getProfessionalJusticeName(
              justice
            )} a ${convertToBailey(chosenPartisanIndex).toFixed(
              2
            )}, and they are actually a ${justice.partisanIndex.mabScore}`}
          </h3>
          <p>
            Bailey, on the other hand, analyzes cases by calendar year and
            supplements the data with additional information from the majority,
            concurring, and dissenting opinions of each justice, as well as
            votes made by members of Congress on similar legislation, amicus
            briefings by public officials, and public opinions of the president
            and members of the House and Senate. This allows for a well rounded
            and contextualized scale in the range of -3 to 3.
          </p>
          <br />
          <p>
            Neither our nor MQ or Bailey's methodologies are going to produce
            completely accurate information. It is difficult to quantify such
            abstract concepts and ideas in any regard. But here, we try to do
            our best to represent the ideological leanings of our Supreme Court
            justices.
          </p>
        </div>
      )}
    </section>
  );
};
