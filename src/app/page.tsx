import Image from "next/image";
import styles from "./page.module.css";
import NavBar from "./Components/Navbar/NavBar";
import { AboutMe } from "./Components/AboutMeCard/AboutMe";
import ProjectsContainer from "./Containers/ProjectsContainer/ProjectsContainer";
import ArticlesContainer from "./Containers/ArticlesContainer/ArticlesContainer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className={styles.main} id="home">
        <AboutMe />
      </main>
      <section className={styles.main} id="projects">
        <ProjectsContainer />
      </section>
      <section className={styles.main} id="articles">
        <ArticlesContainer />
      </section>
      <section id="prizes"></section>
      <section id="contact"></section>
    </>
  );
}
