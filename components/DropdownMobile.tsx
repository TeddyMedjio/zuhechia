"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import { usePathname } from "next/navigation";

const DropdownMobile = () => {
  const [toggle, setToggle] = useState(false);
  const pathname = usePathname();
  return (
    <div className="w-20 md:hidden">
      <div>
        {toggle ? (
          <span
            onClick={() => setToggle((prev) => !prev)}
            className="flex items-center text-white space-x-3 cursor-pointer"
          >
            <Image src="/close.svg" width={18} height={18} alt="icon menu" />
          </span>
        ) : (
          <span
            onClick={() => setToggle((prev) => !prev)}
            className="flex items-center text-white space-x-3 cursor-pointer"
          >
            <Image src="/menu.svg" width={24} height={24} alt="icon menu" />
          </span>
        )}
      </div>

      <div
        className={`bg-black/70 backdrop-blur-sm h-screen w-full absolute right-0 top-[100%] z-50 transition-all duration-700 ease-in-out ${
          toggle
            ? "translate-x-0 opacity-100 "
            : "-translate-y-[1500px] md:opacity-100 opacity-0 "
        }`}
      >
        <ul className="mt-20 ml-5 flex flex-col">
          {NAV_LINKS.map((link) => (
            <li
              onClick={() => setToggle(!toggle)}
              key={link.key}
              className="text-3xl font-bold  pb-8 text-white"
            >
              <Link
                href={link.href}
                key={link.key}
                className={`link ${pathname === `${link.href}`}`}
              >
                <span>{link.label}</span>
              </Link>
            </li>
          ))}
        </ul>
        <span className="flex items-center space-x-3 cursor-pointer ml-5 mt-20">
          <Image
            src="/world.svg"
            height={20}
            width={20}
            alt="image montre"
            className=" scale-100  hover:scale-125 transition-transform duration-500 ease-in-out"
          />
          <p className="text-sm font-semibold text-white">Anglais</p>
        </span>
      </div>
    </div>
  );
};

export default DropdownMobile;
