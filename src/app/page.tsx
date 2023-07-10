
import Image from 'next/image'
import styles from './page.module.css'
import NavBar from './Components/Navbar/NavBar'
import { AboutMe } from './Components/AboutMeCard/AboutMe'

export default function Home() {
  return (
    <>
    <NavBar />
    <main className={styles.main} >
      <AboutMe />
      
    </main>
    </>
  )
}
