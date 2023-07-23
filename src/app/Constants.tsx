import Winning from "./assets/Projects/Winning.png";
import Planty from "./assets/Projects/Planty.png";
import MICAI from "./assets/Articles/MICAI.png";
import UNAM from "./assets/Articles/UNAM.png";
import { StaticImageData } from "next/image";

export interface NavBarElement {
  ref: string;
  class: string;
}

export interface AboutMe {
  name: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  image: StaticImageData;
  linkTxt?: string;
  repo?: string;
}

export interface Articles {
  title: string;
  description: string;
  image: StaticImageData;
  linkTxt?: string;
  link?: string;
}

export interface Experience {
  title: string;
  period: string;
  image: StaticImageData;
}

export interface Prize {
  title: string;
  description: string;
  image: StaticImageData;
}

export const aboutMe: AboutMe = {
  name: "Armando Arredondo Valle",
  description:
    "I am currently studying Computer Science and have developed expertise in a range of programming languages, including C++, Python, React.js, and MySQL. Through participating in the NASA Human Rover Exploration Challenge and the Mexican International Conference of Artificial Intelligence, I have gained valuable experience in data analysis, teamwork, and leadership. I am highly motivated, dedicated, and passionate about programming, which makes me a strong candidate for opportunities in the field.",
};

export const navBarElements: Record<string, NavBarElement> = {
  Projects: {
    ref: "#projects",
    class: "Navbar-item",
  },
  Articles: {
    ref: "#articles",
    class: "Navbar-item",
  },
  Prizes: {
    ref: "#prizes",
    class: "Navbar-item",
  },
  Contact: {
    ref: "#contact",
    class: "Navbar-item",
  },
  Resume: {
    ref: "#resume",
    class: "Navbar-item",
  },
};

export const projectList: Project[] = [
  {
    title: "Responsive Web Service and  Game",
    description:
      "Built responsive web service for EdTech Start Up. Demonstrated full-stack web development and project management. Designed Unity game in C# for programming practice.",
    image: Winning,
    linkTxt: "Link",
    repo: "https://github.com/ArmandoArV/AulifyFront-End",
  },
  {
    title: "Planty - IoT Project",
    description:
      "Created an intelligent plant pot that tracked growth variables. Utilized NodeMCU Wifi to post sensor measurements to AWS RDS. Developed ReactJs frontend for real-time monitoring and watering on the Planty website.",
    image: Planty,
    linkTxt: "Link",
    repo: "https://github.com/TonyNogueron/react-plants",
  },
];

export const articlesList: Articles[] = [
  {
    title:
      "White Blood Cell Detection and Classification in Blood Smear Images Using a One-Stage Object Detector and Similarity Learning",
    description:
      "Nominated for the Best Paper Award at the 2022 Mexican International Conference of Artificial Intelligence (MICAI) for proposing the use of Similarity Learning.",
    image: MICAI,
    linkTxt: "Read More",
    link: "https://link.springer.com/chapter/10.1007/978-3-031-19493-1_27",
  },
  {
    title:
      "Analysis of Machine Learning Algorithms Applied to the Classification of Celestial Object: Stars, Galaxies and Quasars",
    description:
      "Presented at ENES 2022 by UNAM, explored machine learning for star, galaxy, and quasar classification using assessed logistic regression.",
    image: UNAM,
    linkTxt: "Read More",
    link: "https://acrobat.adobe.com/link/track?uri=urn:aaid:scds:US:a6f66366-c226-3707-891e-2f2317e32d5d",
  },
];
