import Image from "next/image";
import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-gradient-to-r from-[#0D0D0D] to-[#090909] mt-20">
      <div className="flex justify-between container mx-auto py-10 lg:py-0">
        <Image
          src="/bg-newsletter.jpg"
          height={415}
          width={405}
          alt="banner newsletter"
          className="hidden lg:block"
        />
        <div className=" flex-auto flex justify-center w-full">
          <div className="flex flex-col items-center justify-center flex-auto max-w-[600px] text-center space-y-7">
            <h2 className="font-heading text-5xl text-white uppercase">
              newsletter
            </h2>
            <p className="text-[#D4D4D4] text-lg">
              Inscrivez-vous pour recevoir des offres exclusives et{" "}
              <br className="hidden md:block" /> des avis sur les produits.
            </p>
            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row items-center gap-2 md:w-full">
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="pt-2 pb-2 pl-2 h-10 w-[320px] md:w-full border-[1px] rounded border-[#303030] text-white placeholder:text-gray-400 outline-none bg-transparent md:flex-auto"
              />
              <button className="bg-gold text-white py-2 px-5  h-full flex-1 rounded font-semibold whitespace-nowrap">
                S&rsquo;inscrire maintenant
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
