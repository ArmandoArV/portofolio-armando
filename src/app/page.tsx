import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./Components/Navbar/NavBar";
import { AboutMe } from "./Components/AboutMeCard/AboutMe";
import ProjectsContainer from "./Containers/ProjectsContainer/ProjectsContainer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className={styles.main} id="home">
        <AboutMe />
      </main>
      <section id="projects">
        <ProjectsContainer />
      </section>
    </>
  );
}
