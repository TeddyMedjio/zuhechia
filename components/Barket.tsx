import Image from "next/image";
import React from "react";

const Barket = () => {
  return (
    <div className="bg-[#0a0a0a] px-5 md:px-0 pt-[80px] md:py-[150px]">
      <div className="container mx-auto mt-10">
        <h2 className="font-heading text-white text-5xl uppercase text-center mb-20">
          votre panier
        </h2>
        <div className="flex flex-col items-center lg:flex-row lg:justify-between">
          <div className=" max-w-[700px] pr-20 space-y-10">
            <div className="flex">
              <Image
                src="/bg-watch.png"
                height={218}
                width={148}
                alt="photo montre"
                className="mr-5"
              />
              <div className="flex-col space-y-2">
                <h3 className="text-gold font-heading text-xl md:text-2xl uppercase">
                  25 000.00.-CHF
                </h3>
                <p className="font-heading text-white uppercase">
                  Sky-Dweller oyster perpetual
                </p>
                <p className="text-[#D4D4D4] text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse{" "}
                </p>
                <div className="flex items-center space-x-5">
                  <button className="text-red-600">Supprimer</button>
                  <div className="flex items-center space-x-2">
                    <button className="text-white bg-[#111111] px-3 rounded">
                      -
                    </button>
                    <p className="text-white">1</p>
                    <button className="text-white bg-[#111111] px-3 rounded">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex">
              <Image
                src="/bg-watch.png"
                height={218}
                width={148}
                alt="photo montre"
                className="mr-5"
              />
              <div className="flex-col space-y-2">
                <h3 className="text-gold font-heading text-xl md:text-2xl uppercase">
                  25 000.00.-CHF
                </h3>
                <p className="font-heading text-white uppercase">
                  Sky-Dweller oyster perpetual
                </p>
                <p className="text-[#D4D4D4] text-sm md:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse{" "}
                </p>
                <div className="flex items-center space-x-5">
                  <button className="text-red-600">Supprimer</button>
                  <div className="flex items-center space-x-2">
                    <button className="text-white bg-[#111111] px-3 rounded">
                      -
                    </button>
                    <p className="text-white">1</p>
                    <button className="text-white bg-[#111111] px-3 rounded">
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* right */}
          <div className="bg-white lg:max-w-[519px] mt-20 lg:mt-0 pt-[20px] rounded">
            <h3 className="font-bold text-2xl uppercase px-10">Résumé</h3>
            <div className="bg-[#1111] h-[1px] w-full my-5"></div>
            <div className=" flex px-10 justify-between">
              <p className="font-medium">Sous Total</p>
              <p className="font-bold">50 000.00.-CHF</p>
            </div>
            <div className="bg-[#1111] h-[1px] w-full my-5"></div>
            <div className=" flex px-10 justify-between">
              <p className="font-medium">Tax</p>
              <p className="font-bold">00.00.-CHF</p>
            </div>
            <div className="bg-[#1111] h-[1px] w-full my-5"></div>
            <div className=" flex px-10 justify-between">
              <p className="font-bold">TOTAL</p>
              <p className="font-bold">50 000.00.-CHF</p>
            </div>
            <p className="px-10 mt-10 text-sm uppercase">
              *Expédition et manutention estimées standard :{" "}
              <span className="font-bold ">GRATUIT Arrive 25-30 jours</span>
            </p>
            <div className="px-10 flex flex-col mt-10 w-full">
              <button className="bg-black text-white py-3 px-10 w-full rounded">
                Commande
              </button>
              <Image
                src="/pay.png"
                width={368}
                height={51}
                alt="logos paiement"
                className=" self-center mt-5 mb-10 lg:mb-0"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Barket;
