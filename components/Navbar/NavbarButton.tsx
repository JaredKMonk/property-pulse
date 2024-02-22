"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
};

const NavbarButton = ({ href, children }: Props) => {
  const currentPathname = usePathname();
  return (
    <Link
      href={href}
      className={`text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2 ${
        currentPathname === href ? "bg-black" : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default NavbarButton;
