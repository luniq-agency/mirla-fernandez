import AnimateDiv from "./animations/Container";

interface Props {
  alt?: boolean;
  text: string;
}

export default function Tag({ alt, text }: Props) {
  return (
    <AnimateDiv delay={0.25}>
      <span className={alt ? "tag-alt" : "tag"}>{text}</span>
    </AnimateDiv>
  );
}
