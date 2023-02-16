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
  summary: string;
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
    summary:
      "Without a full term nor any opinions written, it is difficult to say where Justice Jackson will land on the ideological spectrum. Most likely, she will fall somewhere between Justice Kagan’s pragmatic approach and Justice Sotomayor’s liberal jurisprudence. \n What is already clear from oral arguments this term is that Justice Jackson isn’t wasting her time making her mark. Already she has cast herself as a tenacious, composed, and consistent justice. Today, the jurisprudence that dominates the Court–and lower courts–is rooted in originalism and textualism. Originalism is the principle that a text or statute should be interpreted in a way that is consistent with how it would have been understood and intended at the time it was written. All of the conservative justices claim to be originalists, but it is becoming increasingly clear that they use this interpretive tool when it suits their desired results. Justice Jackson might just be the only true originalist on the Court. In oral arguments for the voting rights and affirmative action cases this term, Justice Jackson gave compelling and historically accurate arguments within an originalist framework that were vastly more consistent with the principle than any of the self-avowed conservative “originalists” that sit beside her.\n",
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
      mabScore: 1.15,
    },
    imageLink: SAUrl,
    summary:
      "Justice Samuel Alito is widely considered one of the two most conservative members of the Court, along with Justice Thomas. \nThere are two predominate cases around reproductive freedom. The more well know is Roe v. Wade, but the case that gave the right structure was the 1992 landmark case, Southeastern Pennsylvania Planned Parenthood v. Casey. The case leading up to the Supreme Court argument was heard by the 3rd Circuit Court and featured a scathing dissent from none other than Samuel J. Alito. Thirty years later, it seems Justice Alito got his due. From Alito’s opinion in Dobbs v. Whole Women’s Health (2022), one would think he is the conservative to put all conservatives to shame (when you reference “the quickening” and seventeenth century doctors, the only direction you can go is backwards). However, while no one is reveling in the new power of this conservative captured court as much as Alito, there is one justice that is unquestionably more conservative than he.\n",
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
    summary:
      "Chief Justice John Roberts is the least conservative member of the Republican justices on the Court. However, many legal experts and court watchers believe that he would be the most conservative member if he was placed on the bench a couple decades earlier. Even more so than his mentor, Chief Justice Reinquest himself. \nSometimes it is difficult to separate Justice Roberts from Chief Justice Roberts. Up until recently, Roberts has been able to keep a handle on his Court—controlling the narrative and often dictating the scope of an opinion. He is known as much for chipping away at the Voting Rights Act of 1965—he calls it incrementalism—as he is for being the decisive vote upholding the Affordable Care Act once and for all—a vote that partially ostracized him from the increasingly extreme and demanding conservative establishment. Now, it seems the Court is slipping away from him. He is spending more time conducting damage control than writing opinions, and his shouts for incrementalism and precedent are just echoes down the empty halls of the Court while the other Republicans gather in their offices dismantling the Constitution. It is not that he doesn’t mind the results, he just thinks they need to be a little less obvious with how they get there. It is telling that the least conservative of the conservatives would be further to the right than any justice that came before him. A sign of the times if nothing else.\n",
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
    summary:
      "Justice Sonia Sotomayor is considered the most liberal justice on the Court. While we do not know exactly how liberal Justice Jackson will be, it would be difficult for her to surpass Justice Sotomayor. \nOff the bench, Justice Sotomayor has earned the title of “the People’s Justice” for her ability and efforts to connect with ordinary audiences. But the moniker is just as appropriate for her approach in the cases that come before her, especially matters dealing with the Fourth Amendment, protecting people from unreasonable searches and seizures. Justice Sotomayor’s connection with the public is reflected in her opinions of criminal procedure, which are written to inform the people. As a state prosecutor, trial court judge, and someone who comes from a non-elite background, the most liberal justice has brought an abundance of rich knowledge and insight on the criminal justice system to the bench. Instead of writing opinions–or more commonly today, dissents–with academic, theoretical, or abstract legal concepts, Justice Sotomayor speaks with compassion and authority about the effects that the Court’s decisions have on the people. An idea that is quickly vanishing from this conservative Court.\n",
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
    summary:
      "There are many on the left who don’t think Justice Kagan is liberal enough; however, her mark on the Court is becoming more and more distinct with every term. There are just a handful of “great dissenters” in the history of the Court. Minority decisions—or dissents—don’t have any legal weight behind them. They are the opinion of a single or minority of justices who don’t agree with the majority opinion or how it was reached. Often a dissent consists of a specific legal argument, often obscure or technical, but every so often an argument is laid out with such skill and dexterity that it serves as a guidepost for future legal arguments and opinions. Great dissenters are often some of the best writers, but they are also adept at speaking to a particular audience, whether that is to future law students or directly to the people. Circumstance as much as skill are required to make a “great dissenter”. Justice Oliver Wendell Holmes, perhaps the greatest dissenter of all, sat on the bench in a time when liberty of contract was the law of the land, leaving behind the working class and marginalized in our society. Justice Antonin Scalia, the father of originalism, sat on the bench when there were more Democratic justices and some of his Republican colleagues had drifted to the left of center. Scalia’s scathing yet intelligent and powerful dissents have served as the backbone for many of the recent controversial decisions. Justice Kagan seems to be in a similar mode–both with writing skill and legal acumen, along with serving on the bench in a time when a clear and convincing liberal perspective is needed more than ever.\n",
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
    summary:
      "Justice Barrett, along with Justice Gorsuch, are the median conservative justices out of the six that make up today’s supermajority. \nThe jury is still out on where Justice Barrett’s jurisprudence falls on the ideological spectrum. But it is safe to say she is ready to reverse much of the legacy that her predecessor built. Surely, Barrett and Ruth Bader Ginsburg’s idea of equality differs, but just how much the former is willing to dismantle remains unclear. During oral arguments, Barrett often asks specific and esoteric questions that are pedagogical in nature and tone. This might stem from her extensive time teaching at Notre Dame and short time on the bench in the 7th Circuit. Barrett and her supporters have framed the justice as a devout Catholic and family woman. She has seven kids, two of whom are adopted, but she has not let that stand in the way of a prolific career. However, with her reliance on “safe haven” laws as an alternative to abortion and other arcane ideas about the Constitution, she has shown that she is out of touch with the plight of working families, single mothers, and marginalized communities.\n",
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
    summary:
      "Today, Justice Clarence Thomas is the most conservative member of the Court. And it isn’t particularly close. \nJust a few years ago, Clarence Thomas’ legacy was that of justice who hardly spoke during oral arguments and wrote mostly extremist dissents and concurrences—often solo. This is a man who favorably cited Korematsu v. United States—justifying the detention of Japanese-Americans during World War II—and questioned Brown v. Board of Education. Today, this is Justice Thomas’ Court. As the senior member of the Court, he is first to speak at oral argument—and often does—and his jurisprudential fingerprints are all over some of the more controversial decisions over the past couple years. Justice Thomas is, without a doubt, the most conservative member of the Supreme Court and, frighteningly, the North Star for many judges across the country.\n",
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
    summary: "\n",
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
    summary:
      "Justice Brett Kavanaugh is one of the more moderate of the conservative members of the Court, with only Chief Justice Roberts to the left of him. \nSo far, Justice Kavanaugh’s legacy is tied to his explosive nomination hearings in the Senate. Accused of sexual assault from a credible high school acquaintance, Justice Kavanaugh spent most of his time in front of the committee on the defensive—at one time breaking down over his love of beer and sentimental attachment to calendars. Based off his writings and time as a circuit judge, Kavanaugh had one of the more conservative scores entering his hearings. Having worked in the executive branch, he gives a lot of leeway to presidential power and privilege. However, his opinions and comments at oral argument suggest a more reserved and incremental justice in the vein of Chief Justice Roberts—in fact, there are times where he acts as if he wants to be the next chief. When it is clear that long standing precedent will be overturned during oral arguments, Justice Kavanaugh is quick to point out the safeguards that still exist. He wants to assure people there is nothing to worry about, nothing to see here—a tactic he has picked up from the chief justice. Many court watchers believe him to be the powerful “middle” justice—the median on the ideological scale and what would be the decisive fifth vote if not for the current conservative supermajority. Some say this is the Roberts Court, he is the Chief Justice after all. Others claim this is the Thomas Court, the most senior member whose ideology and jurisprudence are quickly becoming the standard. If he had his way, however, this would be the Kavanaugh Court.\n",
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
  if (
    justice.partisanIndex.mqScore === 0 ||
    justice.partisanIndex.mabScore === 0
  ) {
    return `Although ${getProfessionalJusticeName(
      justice
    )} is projected to be ${
      justice.leaning
    } based on their nomination, there is not enough data to quantify their decision history`;
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
        comparison = scaledUserScore < shiftedMQ ? "more" : "less";
        break;
      case "Liberal":
        comparison = scaledUserScore > shiftedMQ ? "less" : "more";
        break;
    }
  }
  return `${getProfessionalJusticeName(
    justice
  )} is ${comparison} ${justice.leaning.toLowerCase()} than you have indicated.`;
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
