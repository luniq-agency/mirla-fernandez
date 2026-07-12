import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  gap: string | number;
  grow?: number;
  id?: string;
}

export default function Row({ children, gap, grow,id }: Props) {
  return (
    <div className="row" style={{ gap, flexGrow: grow }} id={id}>
      {children}
    </div>
  );
}
