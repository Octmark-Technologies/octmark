import Link from "next/link";
import type { ReactNode } from "react";

interface ButtonOutlineProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  /** "dark" renders with light border/text for use on dark canvas */
  variant?: "light" | "dark";
}

const BASE =
  "inline-flex items-center justify-center h-11 px-6 " +
  "bg-transparent font-display text-sm tracking-wide " +
  "rounded-[6px] cursor-pointer select-none " +
  "transition-all duration-150 " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 " +
  "disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none";

const VARIANT = {
  light:
    "border border-[#014584] text-[#014584] " +
    "hover:bg-[#014584] hover:text-white " +
    "focus-visible:outline-[#014584]",
  dark:
    "border border-[rgba(255,255,255,0.25)] text-[#EEF1F7] " +
    "hover:border-[rgba(255,255,255,0.5)] hover:text-white " +
    "focus-visible:outline-white",
};

export default function ButtonOutline({
  children,
  href,
  onClick,
  type = "button",
  className = "",
  fullWidth = false,
  disabled = false,
  variant = "light",
}: ButtonOutlineProps) {
  const cls = `${BASE} ${VARIANT[variant]}${fullWidth ? " w-full" : ""}${className ? ` ${className}` : ""}`;

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
