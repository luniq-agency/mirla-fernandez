"use client";

import Navlink from "./Navlink";
import styles from "./Navigation.module.css";
import { PrimaryButton } from "../buttons/Buttons";
import Row from "../layout/Row";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Logo from "../brand/Logo";

export default function Navbar() {
  // SCROLL
  const lastScrollY = useRef(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Scrollposition beim Refresh wiederherstellen
    const currentY = window.scrollY;
    setIsScrolled(currentY > 10);
    lastScrollY.current = currentY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      // Solid wenn gescrollt
      setIsScrolled(currentY > 10);

      // Verstecken beim Runterscrollen, zeigen beim Hochscrollen
      /*if (currentY > lastScrollY.current && currentY > 80) {
        setIsHidden(true); // runterscrollen → verstecken
      } else {
        setIsHidden(false); // hochscrollen → zeigen
      }
        */

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={styles.navbar}
      style={{
        backgroundColor: isScrolled ? "rgba(50,50,50,0.7)" : "transparent",
        backdropFilter: isScrolled ? "blur(25px)" : "none",
      }}
    >
      <div className={styles.navbarInner}>
        <Logo />
        <Row gap="2rem" grow={1} id="navbar-links">
          <Navlink label="Leistungen" target="#leistungen" />
          <Navlink label="Über uns" target="#ueber-uns" />
          <Navlink label="Team" target="#team" />
        </Row>
        <PrimaryButton label="Termin buchen" />
      </div>
    </nav>
  );
}
