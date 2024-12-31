"use client";

import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

export const ActiveLink = ({
  children,
  className,
  index,
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  index?: boolean;
} & LinkProps) => {
  const { href } = rest;
  const pathName = usePathname();
  const isActive = pathName === href || (index && !pathName);
  return (
    <Link
      {...rest}
      className={cn(className, isActive && "font-bold bg-black text-white")}
    >
      {children}
    </Link>
  );
};
