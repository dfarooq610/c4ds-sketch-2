import ACBUrl from "/src/assets/ACB.png";
import KBJUrl from "/src/assets/KBJ.png";
import NGUrl from "/src/assets/NG.png";
import BKUrl from "/src/assets/BK.png";
import SAUrl from "/src/assets/SA.png";
import SSUrl from "/src/assets/SS.png";
import EKUrl from "/src/assets/EK.png";
import CTUrl from "/src/assets/CT.png";
import JRUrl from "/src/assets/JR.png";

export type Justice = {
  name: string;
  yearNominated: number;
  leaning: "Conservative" | "Liberal";
  senateMajority: {
    seats: number;
    controlParty: "Democrat" | "Republican";
  };
  nominatedBy: string;
  confirmationVoteTotal: number;
  partisanIndex: {
    mqScore: number;
    mabScore: number;
  };
  imageLink: string;
};

export const JUSTICES: Justice[] = [
  {
    name: "Ketanji Brown Jackson",
    yearNominated: 2022,
    senateMajority: {
      seats: 50,
      controlParty: "Democrat",
    },
    nominatedBy: "President Biden",
    confirmationVoteTotal: 53,
    leaning: "Liberal",
    partisanIndex: {
      mqScore: 0,
      mabScore: 0,
    },
    imageLink: KBJUrl,
  },
  {
    name: "Samuel Alito",
    yearNominated: 2021,
    senateMajority: {
      seats: 55,
      controlParty: "Republican",
    },
    confirmationVoteTotal: 58,
    leaning: "Conservative",
    nominatedBy: "President W. Bush",
    partisanIndex: {
      mqScore: 2.06,
      mabScore: 1.47,
    },
    imageLink: SAUrl,
  },
  {
    name: "John Roberts",
    yearNominated: 2021,
    senateMajority: {
      seats: 55,
      controlParty: "Republican",
    },
    nominatedBy: "President W. Bush",
    confirmationVoteTotal: 78,
    leaning: "Conservative",
    partisanIndex: {
      mqScore: 0.7,
      mabScore: 0.6,
    },
    imageLink: JRUrl,
  },
  {
    name: "Sonia Sotomayor",
    yearNominated: 2021,
    senateMajority: {
      seats: 59,
      controlParty: "Democrat",
    },
    nominatedBy: "President Obama",
    confirmationVoteTotal: 68,
    leaning: "Liberal",
    partisanIndex: {
      mqScore: -3.17,
      mabScore: -1.17,
    },
    imageLink: SSUrl,
  },
  {
    name: "Elena Kagan",
    yearNominated: 2010,
    senateMajority: {
      seats: 59,
      controlParty: "Democrat",
    },
    nominatedBy: "President Obama",
    confirmationVoteTotal: 63,
    leaning: "Liberal",
    partisanIndex: {
      mqScore: -1.64,
      mabScore: -0.72,
    },
    imageLink: EKUrl,
  },
  {
    name: "Amy Coney Barett",
    yearNominated: 2020,
    senateMajority: {
      seats: 53,
      controlParty: "Republican",
    },
    nominatedBy: "President Trump",
    confirmationVoteTotal: 52,
    leaning: "Conservative",
    partisanIndex: {
      mqScore: 1.28,
      mabScore: 0,
    },
    imageLink: ACBUrl,
  },
  {
    name: "Clarence Thomas",
    yearNominated: 1991,
    senateMajority: {
      seats: 56,
      controlParty: "Democrat",
    },
    nominatedBy: "President H.W. Bush",
    confirmationVoteTotal: 52,
    leaning: "Conservative",
    partisanIndex: {
      mqScore: 3.15,
      mabScore: 1.47,
    },
    imageLink: CTUrl,
  },
  {
    name: "Neil Gorsuch",
    yearNominated: 2017,
    senateMajority: {
      seats: 51,
      controlParty: "Democrat",
    },
    nominatedBy: "President Trump",
    confirmationVoteTotal: 54,
    leaning: "Conservative",
    partisanIndex: {
      mqScore: 1.06,
      mabScore: 1.02,
    },
    imageLink: NGUrl,
  },
  {
    name: "Brett Kavanaugh",
    yearNominated: 2018,
    senateMajority: {
      seats: 51,
      controlParty: "Republican",
    },
    nominatedBy: "President Trump",
    confirmationVoteTotal: 50,
    leaning: "Conservative",
    partisanIndex: {
      mqScore: 0.69,
      mabScore: 0.77,
    },
    imageLink: BKUrl,
  },
];

export const generateJusticeSummary = (justice: Justice): string => {
  return `Justice ${justice.name.split(" ").pop()} was nominated in ${
    justice.yearNominated
  } by ${justice.nominatedBy} and confirmed by a ${
    justice.senateMajority.seats
  }-seat 
  ${justice.senateMajority.controlParty}-controlled Senate with ${
    justice.confirmationVoteTotal
  } votes.`;
};

export const compareJusticePartisanship = (
  justice: Justice,
  selectedPartisanship: number
): string => {
  if (justice.partisanIndex.mqScore === 0 || justice.partisanIndex.mabScore === 0) {
    return `We do not have enough data to quantify the partisanship of ${getProfessionalJusticeName(
      justice
    )}`;
  }

  // selectedPartisanship in [0,100], scaled to fit range of MQ on 120 point scale (because float comparison is scary)
  let scaledUserScore = (selectedPartisanship / 100) * 120;
  // MQ score translated to positive numbers for comparison (on 120 point scale bc float comparison is scary)
  let shiftedMQ = (justice.partisanIndex.mqScore + 6) * 10;

  console.log(scaledUserScore, shiftedMQ);

  let comparison;
  // within a 5% delta (0.6 points)
  if (Math.abs(scaledUserScore - shiftedMQ) < 6) {
    comparison = "about as";
  } else {
    switch (justice.leaning) {
      case "Conservative":
        comparison = scaledUserScore > shiftedMQ ? "more" : "less";
        break;
      case "Liberal":
        comparison = scaledUserScore > shiftedMQ ? "less" : "more";
        break;
    }
  }
  return `${getProfessionalJusticeName(justice)} is ${comparison} ${
    justice.leaning.toLowerCase()
  } than you have indicated.`;
};

export const convertToMQ = (score: number): number => {
  return (score / 100) * 12 - 6;
};

export const convertToBailey = (score: number): number => {
  return (score / 100) * 6 - 3;
};

export const getProfessionalJusticeName = (justice: Justice) => {
  return `Justice ${justice.name.split(" ").pop()}`;
};
