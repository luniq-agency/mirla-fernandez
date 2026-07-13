"use client";

import { motion } from "framer-motion";
import Navlink from "./Navlink";
import styles from "./Navigation.module.css";
import { PrimaryButton } from "../buttons/Buttons";
import Row from "../layout/Row";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Logo from "../brand/Logo";

// Als Array statt als Funktion -> ermöglicht hardwarebeschleunigte Animation
const EASE: [number, number, number, number] = [0.65, 0, 0.35, 1];

export default function Navbar() {
  // SCROLL
  const lastScrollY = useRef(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const currentY = window.scrollY;
    setIsScrolled(currentY > 10);
    lastScrollY.current = currentY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 10);
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      animate={{
        y: 0,
        backgroundColor: isScrolled ? "rgba(50,50,50,0.7)" : "rgba(50,50,50,0)",
        backdropFilter: isScrolled ? "blur(25px)" : "blur(0px)",
      }}
      className={styles.navbar}
      initial={{ y: -80 }}
      transition={{ duration: 0.9, ease: EASE }}
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
    </motion.nav>
  );
}