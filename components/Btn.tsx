import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  href: string;
  variant?: "primary" | "ghost";
  external?: boolean;
  children: ReactNode;
};

export default function Btn({ href, variant = "primary", external, children }: Props) {
  const cls = variant === "primary" ? "btn-primary" : "btn-ghost";
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
