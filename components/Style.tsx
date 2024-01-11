import Image from "next/image";
import Link from "next/link";
import React from "react";

const Style = () => {
  return (
    <div className="bg-heroFive bg-no-repeat bg-cover bg-right  md:h-[749px] relative z-20">
      <div className="bg-black/70 absolute h-full w-full -z-10 lg:hidden"></div>
      <div className="container mx-auto z-50 flex justify-center lg:justify-start">
        <div className="md:max-w-2xl py-40 md:py-72 flex flex-col items-center lg:items-start">
          <h2 className=" text-4xl md:text-6xl font-heading text-white mb-10 text-center lg:text-left">
            Nous savons tout sur le style et les marques modernes
          </h2>
          <Link
            href="#"
            className="flex items-center text-white px-[22px] py-[14px] font-medium rounded bg-black/30 hover:bg-black/60 group transition all duration-500 ease-in-out max-w-[185px] border-slate-300 border-2"
          >
            En Savoir Plus{" "}
            <span>
              <Image
                src="/arrow.svg"
                height={17}
                width={9}
                alt="arrow icon"
                className=" ml-4 transition-all delay-150 duration-150 ease-in"
              />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Style;
