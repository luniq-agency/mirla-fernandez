import Link from "next/link";

interface Props {
  inverted?: boolean;
}

export default function Logo({ inverted }: Props) {
  return (
    <Link href="/">
      <img
        alt="Das Logo der Friseur Akademie Offenburg."
        src="/logo.png"
        style={{filter: inverted ? 'invert(1)' : 'none'}}
        width={160}
      />
    </Link>
  );
}
