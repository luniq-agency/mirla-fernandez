interface Props {
  height: number;
}

export default function Divider({ height }: Props) {
  return <div style={{ height: `${height}rem` }} />;
}
