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
    name: "Kentaji Brown Jackson",
    yearNominated: 2022,
    senateMajority: {
      seats: 50,
      controlParty: "Democrat",
    },
    confirmationVoteTotal: 53,
    partisanIndex: 1,
    imageLink: "",
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
    imageLink: "",
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
    imageLink: "",
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
    imageLink: "",
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
    imageLink: "",
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
    imageLink: "",
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
    imageLink: "",
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
    imageLink: "",
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
    imageLink: "",
  },
];

export const generateJusticeSummary = (justice: Justice): string => {
  return `${justice.name} was nominated in ${justice.yearNominated} and confirmed in a ${justice.senateMajority.seats} seat 
  ${justice.senateMajority.controlParty}-controlled Senate with ${justice.confirmationVoteTotal} votes.`;
};
