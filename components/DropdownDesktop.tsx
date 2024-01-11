"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/constants";
import { usePathname } from "next/navigation";

const DropdownDesktop = () => {
  const [toggle, setToggle] = useState(false);

  const pathname = usePathname();
  return (
    <div className="w-20 hidden md:block">
      <button onClick={() => setToggle((prev) => !prev)}>
        {toggle ? (
          <span className="flex items-center text-white space-x-3 ">
            <Image src="/close.svg" width={10} height={10} alt="icon menu" />
            <p>Fermé</p>
          </span>
        ) : (
          <span className="flex items-center text-white space-x-3 ">
            <Image src="/menu.svg" width={24} height={24} alt="icon menu" />
            <p>Menu</p>
          </span>
        )}
      </button>

      <div
        className={`bg-black/70 backdrop-blur-sm h-screen w-full absolute right-0 top-[100%] z-50 transition-all duration-700 ease-in-out ${
          toggle
            ? "translate-x-0 opacity-100 "
            : "-translate-y-[1500px] md:opacity-100 opacity-0 "
        }`}
      >
        <div className="container mx-auto mt-32 ">
          <div className="flex items-start justify-between">
            <ul className="flex items-center space-x-5 lg:space-x-10">
              {NAV_LINKS.map((link) => (
                <li
                  onClick={() => setToggle(!toggle)}
                  key={link.key}
                  className="text-xl font-medium text-white hover:text-gold hover:underline transition-all duration-300 ease-in-out "
                >
                  <Link
                    href={link.href}
                    key={link.key}
                    className={`link ${pathname === `${link.href}`}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <span className="lg:flex items-center space-x-3 justify-center cursor-pointer hidden">
              <Image
                src="/world.svg"
                height={20}
                width={20}
                alt="image montre"
              />
              <p className="text-sm font-semibold text-white">Anglais</p>
            </span>
          </div>
          <div className="flex items-center space-x-2 mt-10 overflow-hidden">
            <div>
              {" "}
              <div className="overflow-hidden cursor-pointer ">
                <Image
                  src="/watch1.png"
                  height={361}
                  width={421}
                  alt="image montre"
                  className=" scale-100  hover:scale-125 transition-transform duration-300 ease-in-out"
                />
              </div>
              <p className="text-white mt-5 font-semibold">GMT-Master I</p>
            </div>
            <div>
              {" "}
              <div className="overflow-hidden cursor-pointer ">
                <Image
                  src="/watch2.png"
                  height={361}
                  width={421}
                  alt="image montre"
                  className=" scale-100  hover:scale-125 transition-transform duration-300 ease-in-out"
                />
              </div>
              <p className="text-white mt-5 font-semibold">GMT-Master II</p>
            </div>
            <div>
              {" "}
              <div className="overflow-hidden cursor-pointer ">
                <Image
                  src="/watch3.png"
                  height={361}
                  width={421}
                  alt="image montre"
                  className=" scale-100  hover:scale-125 transition-transform duration-300 ease-in-out"
                />
              </div>
              <p className="text-white mt-5 font-semibold">GMT-Master III</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownDesktop;
