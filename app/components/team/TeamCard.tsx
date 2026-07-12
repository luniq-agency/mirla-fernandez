"use client";

import { cubicBezier, motion } from "framer-motion";
import SplitText from "../animations/SplitText";
import styles from "./Team.module.css";
import { useEffect, useState } from "react";
import { language_options } from "@/app/constants/basics";

function useViewportAmount(desktop = 0.5, mobile = 0.2) {
  const [amount, setAmount] = useState(desktop);

  useEffect(() => {
    const update = () => setAmount(window.innerWidth < 968 ? mobile : desktop);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [desktop, mobile]);

  return amount;
}
interface Props {
  bio?: string;
  delay?: number;
  img: string;
  languages: string[];
  name: string;
  role: string;
}

export default function TeamCard({
  bio,
  delay = 0,
  img,
  languages,
  name,
  role,
}: Props) {
  const amount = useViewportAmount();
  const bg = `url(${img})`;
  const transition = cubicBezier(0.65, 0, 0.35, 1);

  const lang = language_options.filter((l) => languages.includes(l.value));

  return (
    <motion.div
      className={styles.teamCard}
      initial={{ filter: "blur(25px)", opacity: 0, y: 40 }}
      style={{ backgroundImage: bg }}
      transition={{ delay, duration: 0.8, ease: transition }}
      viewport={{ once: true, amount }}
      whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
    >
      <div className={styles.teamCardContent}>
        <div className={styles.languages}>
          {lang.map((l, i) => (
            <div className={styles.languageIcon} key={i}>
              <img src={l.flag} width="100%" />
            </div>
          ))}
        </div>
        <div className="column">
          <h3 className={styles.teamMemberName}>{name}</h3>
          <SplitText delay={30} text={role} textAlign="left" />
          <span>
            <SplitText
              delay={1}
              splitType="words"
              text={bio || ""}
              textAlign="left"
            />
          </span>
        </div>
      </div>
    </motion.div>
  );
}
