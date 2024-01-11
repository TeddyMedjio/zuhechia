import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="overflow-hidden">
      <section className="relative h-screen">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col space-y-5 justify-center items-center w-full z-30">
          <h3 className="uppercase text-xl md:text-2xl text-white">
            Oyster Perpetual
          </h3>
          <h1 className="font-heading text-6xl md:text-8xl text-white text-center">
            Alpine Endurance
          </h1>
          <Link
            href="#"
            className="flex items-center text-white px-[22px] py-[14px] font-medium rounded bg-black/30 hover:bg-black/60 group transition all duration-500 ease-in-out "
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
        <div className="absolute bg-black/50 h-full w-full "></div>
        <div className="h-full w-full">
          <video
            className=" object-cover h-full w-full"
            autoPlay
            loop
            muted
            playsInline
            poster="https://res.cloudinary.com/dqfd5g2fd/image/upload/v1704870151/dml6evrvkwhaaqzyw4yn.png"
          >
            <source
              src="https://res.cloudinary.com/dqfd5g2fd/video/upload/v1704870037/qzmpbpsaloalkb7ebhkx.mp4"
              type="video/mp4"
            />
            <source
              src="https://res.cloudinary.com/dqfd5g2fd/video/upload/v1704870094/dec9wpnm0oatqns8f241.webm"
              type="video/webm"
            />
          </video>
        </div>
      </section>

      <section className="h-screen w-full bg-center bg-cover flex flex-col space-y-5 justify-center items-center bg-heroOne bg-fixed">
        <h3 className="uppercase text-xl md:text-2xl text-white">
          montres hommes
        </h3>
        <h1 className="font-heading text-6xl md:text-8xl text-white text-center">
          Oyster Perpetual
        </h1>
        <Link
          href="#"
          className="flex items-center text-white px-[22px] py-[14px] font-medium rounded bg-black/30 hover:bg-black/60 group transition all duration-500 ease-in-out "
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
      </section>
      <section className="h-screen w-full bg-center bg-cover flex flex-col space-y-5 justify-center items-center bg-heroTwo bg-fixed">
        <h3 className="uppercase text-xl md:text-2xl text-white">
          Montres femme
        </h3>
        <h1 className="font-heading text-6xl md:text-8xl text-white text-center">
          Zuhe Chia
        </h1>
        <Link
          href="#"
          className="flex items-center text-white px-[22px] py-[14px] font-medium rounded bg-black/30 hover:bg-black/60 group transition all duration-500 ease-in-out "
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
      </section>
    </div>
  );
};

export default Hero;
