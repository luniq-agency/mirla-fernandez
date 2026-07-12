"use client";

import { cubicBezier, motion } from "framer-motion";
import styles from "./Services.module.css";
import { useEffect, useState } from "react";
import SplitText from "../animations/SplitText";

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
  description: string;
  delay?: number;
  image?: string;
  title: string;
}

export default function FeatureCard({
  delay,
  description,
  image,
  title,
}: Props) {
  const amount = useViewportAmount();
  const bg = `url(${image})`;
  const transition = cubicBezier(0.65, 0, 0.35, 1);

  return (
    <motion.div
      className={styles.serviceCard}
      initial={{ filter: "blur(25px)", opacity: 0, y: 40 }}
      style={{ backgroundImage: bg }}
      transition={{ delay, duration: 0.8, ease: transition }}
      viewport={{ once: true, amount }}
      whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
    >
      <div className={styles.serviceCardContent}>
        <h3>{title}</h3>
        <span>
          <SplitText delay={1} splitType="words" text={description} textAlign="left"/>
        </span>
      </div>
    </motion.div>
  );
}
