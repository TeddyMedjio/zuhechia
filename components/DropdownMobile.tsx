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
    <div className="w-5 md:hidden">
      <div>
        {toggle ? (
          <span
            onClick={() => setToggle((prev) => !prev)}
            className="flex items-center text-white space-x-3 cursor-pointer"
          >
            <Image src="/close.svg" width={10} height={10} alt="icon menu" />
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
        <ul className="mt-20 ml-10 flex flex-col -z-50">
          {NAV_LINKS.map((link) => (
            <li
              onClick={() => setToggle(!toggle)}
              key={link.key}
              className="text-3xl font-bold text-blu-50 pb-8 text-white"
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
      </div>
    </div>
  );
};

export default DropdownMobile;
