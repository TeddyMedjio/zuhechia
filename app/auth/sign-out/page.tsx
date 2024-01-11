import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign-out ",
};

const Page = () => {
  return (
    <div className="bg-black h-screen pt-[120px]">
      <div className="bg-heroThree bg-contain bg-no-repeat bg-left h-full w-full flex">
        <div className="flex-auto"></div>
        <div className="bg-white h-full w-full lg:w-[65%] lg:rounded-tl-[50px] lg:rounded-bl-[50px] flex justify-center">
          <div className="flex flex-col items-center justify-center space-y-10 w-full px-10 md:px-0 md:w-[55%]">
            <h3 className="text-black text-[27px] font-bold">
              Créer votre compte
            </h3>
            <button className="flex items-start justify-center gap-4 border-[1px] px-4 py-2 rounded-lg">
              <Image
                src="/google.svg"
                height={25}
                width={25}
                alt="logo google"
              />
              Google
            </button>
            <div className=" relative w-1/2">
              <div className="absolute inset-0 flex items-center">
                <div className=" w-full border-t border-[#B8B8B8] "></div>
              </div>
              <p className="text-black text-base whitespace-nowrap text-center px-5 bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                Ou continuer avec
              </p>
            </div>

            <form className=" flex flex-col w-full">
              <input
                type="text"
                name="Name"
                required
                placeholder="Name"
                className="pt-5 pb-1 h-10 mb-10 border-b-[1px] placeholder:text-gray-400 outline-none"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="pt-5 pb-1 h-10 mb-10 border-b-[1px] placeholder:text-gray-400 outline-none"
              />
              <input
                type="password"
                required
                name="password"
                placeholder="Password"
                className="pt-5 pb-1 h-10 mb-10 border-b-[1px] placeholder:text-gray-400 outline-none"
              />

              <p className="text-base my-5 text-center">
                Vous avez déjà un compte?{" "}
                <span className="text-gold font-bold hover:underline">
                  <Link href="/auth/sign-in">Connectez-vous</Link>
                </span>
              </p>
              <button className="bg-black text-white px-10 py-4 rounded font-semibold">
                Créer mon compte
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
