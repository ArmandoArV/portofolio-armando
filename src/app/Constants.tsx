
export interface NavBarElement {
  ref: string;
  class: string;
}

export interface AboutMe {
  name: string;
  description: string;
}


export const aboutMe: AboutMe = {
  name: "Armando Arredondo Valle",
  description: "I am currently studying Computer Science and have developed expertise in a range of programming languages, including C++, Python, React.js, and MySQL. Through participating in the NASA Human Rover Exploration Challenge and the Mexican International Conference of Artificial Intelligence, I have gained valuable experience in data analysis, teamwork, and leadership. I am highly motivated, dedicated, and passionate about programming, which makes me a strong candidate for opportunities in the field",
};
export const navBarElements: Record<string, NavBarElement> = {
  Home: {
    ref: "/",
    class: "Navbar-item",
  },
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
