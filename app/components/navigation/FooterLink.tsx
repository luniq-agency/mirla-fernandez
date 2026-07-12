import Link from "next/link";
import styles from "./Navigation.module.css";

interface Props {
  label: string;
  target: string;
}

export function FooterLink({ label, target }: Props) {
  return (
    <Link className={styles.footerLink} href={target}>
      <span>{label}</span>
    </Link>
  );
}

export function FooterLinkSmall({ label, target }: Props) {
  return (
    <Link className={styles.footerLinkSmall} href={target}>
      <span>{label}</span>
    </Link>
  );
}