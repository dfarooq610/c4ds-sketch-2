import ACBUrl from "/src/assets/ACB.png";
import KBJUrl from "/src/assets/ACB.png";
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
  senateMajority: {
    seats: number;
    controlParty: "Democrat" | "Republican";
  };
  nominatedBy: string;
  confirmationVoteTotal: number;
  partisanIndex: number;
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
    partisanIndex: 1,
    imageLink: KBJUrl,
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
    partisanIndex: 1,
    imageLink: CTUrl,
  },
  {
    name: "Samuel Alito",
    yearNominated: 2021,
    senateMajority: {
      seats: 55,
      controlParty: "Republican",
    },
    confirmationVoteTotal: 58,
    nominatedBy: "President Bush",
    partisanIndex: 1,
    imageLink: SAUrl,
  },
  {
    name: "John Roberts",
    yearNominated: 2021,
    senateMajority: {
      seats: 55,
      controlParty: "Republican",
    },
    nominatedBy: "President Bush",
    confirmationVoteTotal: 78,
    partisanIndex: 1,
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
    partisanIndex: 1,
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
    partisanIndex: 1,
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
    partisanIndex: 1,
    imageLink: ACBUrl,
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
    partisanIndex: 1,
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
    partisanIndex: 1,
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
