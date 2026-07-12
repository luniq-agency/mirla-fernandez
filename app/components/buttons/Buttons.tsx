"use client";

import Link from "next/link";
import styles from "./Buttons.module.css";

interface Props {
  animated?: boolean;
  label: string;
  onClick?: () => void;
  target?: string;
  width?: string;
}

export function PrimaryButton({ animated, label, onClick, target, width}: Props) {
  if (!target)
    return (
      <button className={styles.buttonPrimary} onClick={onClick} style={{width}}>
        <span className={styles.buttonLabel}>{label}</span>
      </button>
    );

  return (
    <Link className={styles.buttonPrimary} href={target} style={{width}}>
      <span className={styles.buttonLabel}>{label}</span>
    </Link>
  );
}
