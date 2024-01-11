import Image from "next/image";
import React from "react";

const Montres = () => {
  return (
    <div className="container mx-auto px-10 md:px-0 pt-[80px] md:pt-[120px] bg-black ">
      <div className=" relative mt-20">
        <div className="absolute inset-0 md:flex items-center hidden ">
          <div className="w-full border-t border-gold"></div>
        </div>
        <h2 className="text-gold uppercase font-heading text-4xl md:text-6xl whitespace-nowrap text-center px-0 md:px-10 bg-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          Montres Hommes
        </h2>
      </div>

      <div className="flex flex-col items-center justify-center mt-40 md:mt-64">
        <div className="w-full space-y-20 relative">
          <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between w-full">
            <div className="max-w-[672px] space-y-5 flex-auto">
              <h2 className="font-heading text-5xl md:text-6xl text-white whitespace-nowrap uppercase">
                Sky-Dweller
              </h2>
              <h3 className="uppercase text-gold text-xl">Oyster Perpetual</h3>
              <p className="text-base text-slate-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.{" "}
              </p>
              <button className="text-white bg-[#111111] px-8 py-3 rounded">
                Acheter Maintenant
              </button>
            </div>

            <Image src="/montre.png" height={434} width={480} alt="montre" />
          </div>

          <div className="flex flex-col-reverse md:flex-row-reverse md:items-center md:justify-between w-full border-gray-600 py-28 border-t-[1px] border-b-[1px]">
            <div className="max-w-[672px] space-y-5 pl-0 md:pl-20">
              <h2 className="font-heading text-5xl md:text-6xl text-white whitespace-nowrap uppercase">
                alpina
              </h2>
              <h3 className="uppercase text-gold text-xl ">1883 GENEVE</h3>
              <p className="text-base text-slate-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.{" "}
              </p>
              <button className="text-white bg-[#111111] px-8 py-3 rounded">
                Acheter Maintenant
              </button>
            </div>

            <Image src="/montre2.png" height={434} width={480} alt="montre" />
          </div>

          <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between w-full">
            <div className="max-w-[672px] space-y-5 flex-auto">
              <h2 className="font-heading text-5xl md:text-6xl text-white whitespace-nowrap uppercase">
                YEMA SUPER
              </h2>
              <h3 className="uppercase text-gold text-xl">WORLD TIMER</h3>
              <p className="text-base text-slate-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.{" "}
              </p>
              <button className="text-white bg-[#111111] px-8 py-3 rounded">
                Acheter Maintenant
              </button>
            </div>

            <Image src="/montre3.png" height={434} width={480} alt="montre" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Montres;
