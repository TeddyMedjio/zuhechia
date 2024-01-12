"use client";

import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Dropdown from "./DropdownMobile";
import { useState } from "react";
import DropdownMobile from "./DropdownMobile";
import DropdownDesktop from "./DropdownDesktop";

const Navbar = () => {
  const pathname = usePathname();
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 40) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  if (typeof window !== "undefined")
    window.addEventListener("scroll", changeBackground);

  return (
    <nav
      className={
        navbar
          ? " px-5 w-full pt-[120px] fixed top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 backdrop-blur-sm bg-black/60 transition-all duration-300 ease-in-out"
          : " px-5 w-full mt-[60px] fixed top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"
      }
    >
      <div className="container mx-auto flex items-center justify-between w-full pb-4">
        <DropdownMobile />
        <DropdownDesktop />
        <Link href="/">
          <Image
            src="/logo.svg"
            height={64}
            width={139}
            alt="logo zuhe chia"
            className="hidden md:block"
          />
          <Image
            src="/icon_logo.svg"
            height={30}
            width={34}
            alt="logo zuhe chia"
            className=" md:hidden"
          />
        </Link>

        <div className="flex items-center space-x-4">
          <Link href="#">
            <Image src="/search.svg" height={24} width={24} alt="search" />
          </Link>
          <Link href="/auth/sign-in">
            <Image src="/profil.svg" height={24} width={24} alt="profil icon" />
          </Link>
          <Link href="/cart" className="relative">
            <span className="">
              <p className=" text-white font-semibold text-sm absolute -top-[7px] right-[4px] bg-gold px-1 rounded-full">
                0
              </p>
            </span>
            <Image src="/basket.svg" height={24} width={24} alt="basket icon" />
          </Link>
        </div>
      </div>
      <div className="max-container px-0 lg:px-20 2xl:px-0">
        <div className="h-[1px] w-full bg-blu-50 "></div>
      </div>
    </nav>
  );
};

export default Navbar;
