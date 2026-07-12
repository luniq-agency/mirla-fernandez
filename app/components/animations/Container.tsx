"use client";

import { cubicBezier, motion } from "framer-motion";
import { ReactNode } from "react";
import { useEffect, useState } from "react";

function useViewportAmount(desktop = 0.9, mobile = 0.2) {
  const [amount, setAmount] = useState(desktop);

  useEffect(() => {
    const update = () => setAmount(window.innerWidth < 768 ? mobile : desktop);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [desktop, mobile]);

  return amount;
}

interface Props {
  children: ReactNode;
  delay?: number;
}

export default function AnimateDiv({ children, delay }: Props) {
  const amount = useViewportAmount();
  const transition = cubicBezier(0.65, 0, 0.35, 1);
  return (
    <motion.div
      animate={{ filter: "blur(0px)", opacity: 1, y: 0 }}
      initial={{ filter: "blur(25px)", opacity: 0, y: 40 }}
      transition={{ delay, duration: 0.8, ease: transition }}
      viewport={{ once: true, amount }}
    >
      {children}
    </motion.div>
  );
}
