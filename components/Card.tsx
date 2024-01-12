import Image from "next/image";
import React from "react";

const Card = () => {
  return (
    <div className="bg-heroWatch bg-center bg-cover bg-no-repeat px-5 md:px-0 pt-[80px] md:pt-[150px]">
      <div className="container mx-auto py-20">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between">
          <div className="max-w-[672px] space-y-5 flex-1">
            <h2 className="font-heading text-5xl md:text-6xl text-white whitespace-nowrap uppercase">
              Sky-Dweller
            </h2>
            <h3 className="uppercase text-gold text-xl">Oyster Perpetual</h3>
            <p className="text-base text-slate-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.{" "}
            </p>
            <h2 className="font-heading text-3xl md:text-4xl text-gold whitespace-nowrap uppercase">
              25 000.00 .-CHF
            </h2>
            <button className="text-white bg-[#111111] px-8 py-3 rounded">
              Ajouter au panier
            </button>
          </div>
          <div className="h-auto w-48 md:w-60 lg:w-80">
            <Image
              src="/bg-watch.png"
              height={524}
              width={357}
              alt="watch"
              className="mb-10 md:mb-0 h-full w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
