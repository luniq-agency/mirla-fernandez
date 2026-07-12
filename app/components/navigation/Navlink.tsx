import Link from "next/link";
import styles from "./Navigation.module.css";

interface Props {
  label: string;
  target: string;
}

export default function Navlink({ label, target }: Props) {
  return (
    <Link className={styles.navlink} href={target}>
      <span>{label}</span>
    </Link>
  );
}
