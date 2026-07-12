import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  gap: string | number;
  grow?: number;
  id?: string;
}

export default function Column({ children, gap, grow,id }: Props) {
  return (
    <div className="column" style={{ gap, flexGrow: grow }} id={id}>
      {children}
    </div>
  );
}
