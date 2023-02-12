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
    imageLink: "./src/assets/KBJ.png",
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
    imageLink: "./src/assets/CT.png",
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
    imageLink: "./src/assets/SA.png",
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
    imageLink: "./src/assets/JR.png",
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
    imageLink: "./src/assets/SS.png",
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
    imageLink: "./src/assets/EK.png",
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
    imageLink: "./src/assets/ACB.png",
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
    imageLink: "./src/assets/NG.png",
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
    imageLink: "./src/assets/BK.png",
  },
];

export const generateJusticeSummary = (justice: Justice): string => {
  return `Justice ${justice.name.split(" ").pop()} was nominated in ${justice.yearNominated} by ${justice.nominatedBy} and confirmed in a ${justice.senateMajority.seats} seat 
  ${justice.senateMajority.controlParty}-controlled Senate with ${justice.confirmationVoteTotal} votes.`;
};
