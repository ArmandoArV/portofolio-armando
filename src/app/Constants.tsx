import Winning from "./assets/Projects/Winning.png";
import Planty from "./assets/Projects/Planty.png";
export interface NavBarElement {
  ref: string;
  class: string;
}

export interface AboutMe {
  name: string;
  description: string;
}

export interface Projects {
  title: string;
  description: string;
  image: string;
  repo?: string;
}

export const aboutMe: AboutMe = {
  name: "Armando Arredondo Valle",
  description:
    "I am currently studying Computer Science and have developed expertise in a range of programming languages, including C++, Python, React.js, and MySQL. Through participating in the NASA Human Rover Exploration Challenge and the Mexican International Conference of Artificial Intelligence, I have gained valuable experience in data analysis, teamwork, and leadership. I am highly motivated, dedicated, and passionate about programming, which makes me a strong candidate for opportunities in the field",
};

export const navBarElements: Record<string, NavBarElement> = {
  About: {
    ref: "/about",
    class: "Navbar-item",
  },
  Projects: {
    ref: "/projects",
    class: "Navbar-item",
  },
  Articles: {
    ref: "/articles",
    class: "Navbar-item",
  },
  Prizes: {
    ref: "/prizes",
    class: "Navbar-item",
  },
  Contact: {
    ref: "/contact",
    class: "Navbar-item",
  },
  Resume: {
    ref: "/resume",
    class: "Navbar-item",
  },
};
export const projects: Projects[] = [
  {
    title: "EdTech Start Up - Responsive Web Service and Unity Game",
    description:
    "Built responsive web service for EdTech Start Up. Demonstrated full-stack web development and project management. Designed Unity game in C# for programming practice.",
        image: Winning,
    repo: "https://github.com/ArmandoArV/AulifyFront-End"
  },
  {
    title: "Planty - IoT Project",
    description:
      "Created an intelligent plant pot that tracked growth variables. Utilized NodeMCU Wifi to post sensor measurements to AWS RDS. Developed ReactJs frontend for real-time monitoring and watering on the Planty website.",
    image: Planty,
    repo: "https://github.com/TonyNogueron/react-plants"
  },
];
