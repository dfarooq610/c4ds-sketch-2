export type Justice = {
  name: string;
  yearNominated: number;
  senateMajority: {
    seats: number;
    controlParty: "Democrat" | "Republican";
  };
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
    confirmationVoteTotal: 53,
    partisanIndex: 1,
    imageLink: "/src/assets/KBJ.jpeg",
  },
  {
    name: "Clarence Thomas",
    yearNominated: 1991,
    senateMajority: {
      seats: 56,
      controlParty: "Democrat",
    },
    confirmationVoteTotal: 52,
    partisanIndex: 1,
    imageLink: "/src/assets/CT.jpeg",
  },
  {
    name: "Samuel Alito",
    yearNominated: 2021,
    senateMajority: {
      seats: 55,
      controlParty: "Republican",
    },
    confirmationVoteTotal: 58,
    partisanIndex: 1,
    imageLink: "/src/assets/SA.jpeg",
  },
  {
    name: "John Roberts",
    yearNominated: 2021,
    senateMajority: {
      seats: 55,
      controlParty: "Republican",
    },
    confirmationVoteTotal: 78,
    partisanIndex: 1,
    imageLink: "/src/assets/JR.jpeg",
  },
  {
    name: "Sonia Sotomayor",
    yearNominated: 2021,
    senateMajority: {
      seats: 59,
      controlParty: "Democrat",
    },
    confirmationVoteTotal: 68,
    partisanIndex: 1,
    imageLink: "/src/assets/SS.jpeg",
  },
  {
    name: "Elena Kagan",
    yearNominated: 2021,
    senateMajority: {
      seats: 59,
      controlParty: "Democrat",
    },
    confirmationVoteTotal: 63,
    partisanIndex: 1,
    imageLink: "/src/assets/EK.jpeg",
  },
  {
    name: "Amy Coney Barett",
    yearNominated: 2020,
    senateMajority: {
      seats: 53,
      controlParty: "Republican",
    },
    confirmationVoteTotal: 52,
    partisanIndex: 1,
    imageLink: "/src/assets/ACB.jpeg",
  },
  {
    name: "Neil Gorsuch",
    yearNominated: 2017,
    senateMajority: {
      seats: 51,
      controlParty: "Democrat",
    },
    confirmationVoteTotal: 54,
    partisanIndex: 1,
    imageLink: "/src/assets/NG.jpeg",
  },
  {
    name: "Brett Kavanaugh",
    yearNominated: 2018,
    senateMajority: {
      seats: 51,
      controlParty: "Republican",
    },
    confirmationVoteTotal: 50,
    partisanIndex: 1,
    imageLink: "/src/assets/BK.jpeg",
  },
];

export const generateJusticeSummary = (justice: Justice): string => {
  return `${justice.name} was nominated in ${justice.yearNominated} and confirmed in a ${justice.senateMajority.seats} seat 
  ${justice.senateMajority.controlParty}-controlled Senate with ${justice.confirmationVoteTotal} votes.`;
};
