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
        <div className="container mx-auto mt-32">
          <ul className="flex  items-center -z-50 space-x-5 lg:space-x-10">
            {NAV_LINKS.map((link) => (
              <li
                onClick={() => setToggle(!toggle)}
                key={link.key}
                className="text-xl font-bold  pb-8 text-white hover:text-gold"
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
          <div className="flex items-center space-x-2 mt-10 overflow-hidden">
            <div>
              {" "}
              <Image
                src="/watch1.png"
                height={361}
                width={421}
                alt="image montre"
              />
              <p className="text-white mt-5 font-semibold">GMT-Master II</p>
            </div>
            <div>
              {" "}
              <Image
                src="/watch2.png"
                height={361}
                width={421}
                alt="image montre"
                className=" scale-100 hover:-translate-y-1 hover:scale-150 overflow-hidden "
              />
              <p className="text-white mt-5 font-semibold">GMT-Master II</p>
            </div>
            <div>
              {" "}
              <Image
                src="/watch3.png"
                height={361}
                width={421}
                alt="image montre"
              />
              <p className="text-white mt-5 font-semibold">GMT-Master II</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DropdownDesktop;
