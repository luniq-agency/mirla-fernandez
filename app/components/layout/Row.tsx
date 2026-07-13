import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  gap?: string | number;
  grow?: number;
  layout?: "start" | "end" | "space-between";
  maxWidth?: string | number;
  id?: string;
}

export default function Row({
  children,
  gap,
  grow,
  id,
  layout,
  maxWidth,
}: Props) {
  return (
    <div
      className="row"
      style={{ gap, flexGrow: grow, justifyContent: layout, maxWidth }}
      id={id}
    >
      {children}
    </div>
  );
}
