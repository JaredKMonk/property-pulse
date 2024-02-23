"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
};

const NavbarButtonMobile = ({ href, children }: Props) => {
  const currentPathname = usePathname();
  return (
    <Link
      href={href}
      className={`text-white block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 ${
        currentPathname === href ? "bg-black" : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default NavbarButtonMobile;
