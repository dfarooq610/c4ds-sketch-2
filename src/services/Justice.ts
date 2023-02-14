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
    mqScore: number,
    mabScore: number,
    segalScore: number
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
      segalScore: 0
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
    nominatedBy: "President W. Bush",
    leaning: "Conservative",
    partisanIndex: {
      mqScore: 0,
      mabScore: 0,
      segalScore: 0
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
    leaning: "Conservative",
    confirmationVoteTotal: 78,
    partisanIndex: {
      mqScore: 0,
      mabScore: 0,
      segalScore: 0
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
    leaning: "Liberal",
    nominatedBy: "President Obama",
    confirmationVoteTotal: 68,
    partisanIndex: {
      mqScore: 0,
      mabScore: 0,
      segalScore: 0
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
    leaning: "Liberal",
    nominatedBy: "President Obama",
    confirmationVoteTotal: 63,
    partisanIndex: {
      mqScore: 0,
      mabScore: 0,
      segalScore: 0
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
    leaning: "Conservative",
    nominatedBy: "President Trump",
    confirmationVoteTotal: 52,
    partisanIndex: {
      mqScore: 0,
      mabScore: 0,
      segalScore: 0
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
    leaning: "Conservative",
    nominatedBy: "President H.W. Bush",
    confirmationVoteTotal: 52,
    partisanIndex: {
      mqScore: 0,
      mabScore: 0,
      segalScore: 0
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
    leaning: "Conservative",
    nominatedBy: "President Trump",
    confirmationVoteTotal: 54,
    partisanIndex: {
      mqScore: 0,
      mabScore: 0,
      segalScore: 0
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
    leaning: "Conservative",
    nominatedBy: "President Trump",
    confirmationVoteTotal: 50,
    partisanIndex: {
      mqScore: 0,
      mabScore: 0,
      segalScore: 0
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
