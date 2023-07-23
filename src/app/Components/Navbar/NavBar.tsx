"use client";
import React, { useState } from "react";
import { navBarElements, NavBarElement } from "@/app/Constants";
import styles from "./NavBar.module.css";
export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className={styles.navbarContainer}>
      <ul className={styles.navbarList}>
        <li className={styles.navbarItem}>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
          >
            Home
          </a>
        </li>
        {Object.entries(navBarElements).map(
          ([key, element]: [string, NavBarElement]) => (
            <li className={styles.navbarItem} key={key}>
              <a
                href={element.ref}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(element.ref.substring(1));
                }}
              >
                {key}
              </a>
            </li>
          )
        )}
      </ul>
    
    </div>
  );
}
