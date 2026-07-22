import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonCoralProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  fullWidth?: boolean;
  disabled?: boolean;
}

const BASE =
  "inline-flex items-center justify-center h-11 px-6 " +
  "bg-[#FEA781] text-[#3E3E3E] font-display text-sm tracking-wide " +
  "rounded-[6px] border-0 cursor-pointer select-none " +
  "transition-all duration-150 " +
  "hover:opacity-90 hover:shadow-[0_4px_16px_rgba(254,167,129,0.35)] " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FEA781] " +
  "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none";

export default function ButtonCoral({
  children,
  href,
  onClick,
  type = "button",
  className = "",
  fullWidth = false,
  disabled = false,
}: ButtonCoralProps) {
  const cls = `${BASE}${fullWidth ? " w-full" : ""}${className ? ` ${className}` : ""}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={cls}>
      {children}
    </button>
  );
}
