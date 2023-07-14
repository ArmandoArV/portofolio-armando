
import Image from 'next/image'
import styles from './page.module.css'
import NavBar from './Components/Navbar/NavBar'
import { AboutMe } from './Components/AboutMeCard/AboutMe'
import ProjectsContainer from './Containers/ProjectsContainer/ProjectsContainer'

export default function Home() {
  return (
    <>
    <NavBar />
    <main className={styles.main} >
      <AboutMe />
    </main>
    <section>
    <ProjectsContainer />

    </section>

    </>
  )
}
