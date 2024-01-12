import Image from "next/image";
import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-[#090909] h-96">
      <div className="flex justify-between container mx-auto py-10 lg:py-0 h-full">
        <div className="hidden lg:block  bg-red-600 h-auto ">
          <Image
            src="/bg-newsletter.jpg"
            height={415}
            width={405}
            alt="banner newsletter"
          />
        </div>
        <div className="flex items-center justify-center flex-auto ">
          <div className="flex flex-col flex-auto items-center justify-center text-center space-y-7  max-w-[700px]">
            <h2 className="font-heading text-5xl text-white uppercase">
              newsletter
            </h2>
            <p className="text-[#D4D4D4] text-lg">
              Inscrivez-vous pour recevoir des offres exclusives et{" "}
              <br className="hidden md:block" /> des avis sur les produits.
            </p>
            <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row items-center gap-2 lg:w-full">
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="pt-2 pb-2 pl-2 h-10 w-[320px] lg:w-full border-[1px] rounded border-[#303030] text-white placeholder:text-gray-400 outline-none bg-transparent lg:flex-auto"
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
