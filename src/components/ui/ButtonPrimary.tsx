import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonPrimaryProps {
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
  "bg-[#014584] text-white font-display text-sm tracking-wide " +
  "rounded-[6px] border-0 cursor-pointer select-none " +
  "transition-all duration-150 " +
  "hover:bg-[#0157A8] hover:shadow-[0_0_0_1px_rgba(1,69,132,0.6),0_4px_16px_rgba(1,69,132,0.38)] " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#014584] " +
  "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none";

export default function ButtonPrimary({
  children,
  href,
  onClick,
  type = "button",
  className = "",
  fullWidth = false,
  disabled = false,
}: ButtonPrimaryProps) {
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
