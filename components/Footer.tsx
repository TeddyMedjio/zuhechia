import Image from "next/image";
import React from "react";
import { Logo } from "./Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="my-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start lg:justify-between w-full px-5 md:px-0 ">
        <Link href="/" className="flex-auto mb-20">
          <Logo width={286} height={132} variant="black" />
        </Link>
        <div className="flex max-w-[700px] flex-auto justify-between gap-7 md:gap-0">
          <div>
            <p className="font-bold mb-5 font-heading text-xl">Produits</p>
            <ul className="space-y-5">
              <li className="hover:text-gold transition-all duration-300 ease-in text-sm text-slate-600 md:text-base ">
                <Link href="/">Montres homme</Link>
              </li>
              <li className="hover:text-gold transition-all duration-300 ease-in text-sm text-slate-600 md:text-base">
                <Link href="/">Montres femme</Link>
              </li>
              <li className="hover:text-gold transition-all duration-300 ease-in text-sm text-slate-600 md:text-base">
                <Link href="/">Joaillerie</Link>
              </li>
              <li className="hover:text-gold transition-all duration-300 ease-in text-sm text-slate-600 md:text-base">
                <Link href="/">Maroquinerie</Link>
              </li>
              <li className="hover:text-gold transition-all duration-300 ease-in text-sm text-slate-600 md:text-base">
                <Link href="/">Parfums</Link>
              </li>
              <li className="hover:text-gold transition-all duration-300 ease-in text-sm text-slate-600 md:text-base">
                <Link href="/">Huiles escencielles</Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="mb-10">
              <p className="font-bold mb-5 font-heading text-xl">
                Mentions légales
              </p>
              <ul className="space-y-3">
                <li className="hover:text-gold transition-all duration-300 ease-in text-sm text-slate-600 md:text-base">
                  <Link href="/">Conditions d’utilisation</Link>
                </li>
                <li className="hover:text-gold transition-all duration-300 ease-in text-sm text-slate-600 md:text-base">
                  <Link href="/">Politique de confidentialité</Link>
                </li>
                <li className="hover:text-gold transition-all duration-300 ease-in text-sm text-slate-600 md:text-base">
                  <Link href="/">Cookies</Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-bold mb-5 font-heading text-xl">
                Canaux Officiels
              </p>
              <ul className="space-y-3">
                <li className="hover:text-gold transition-all duration-300 ease-in text-sm text-slate-600 md:text-base flex space-x-2  ">
                  <Image
                    src="/facebook.svg"
                    height={20}
                    width={20}
                    alt="logo twitter"
                  />
                  <Link href="/">Facebook</Link>
                </li>
                <li className="hover:text-gold transition-all duration-300 ease-in text-sm text-slate-600 md:text-base flex space-x-2">
                  <Image
                    src="/instagram.svg"
                    height={20}
                    width={20}
                    alt="logo twitter"
                  />
                  <Link href="/">Instagram</Link>
                </li>
                <li className="hover:text-gold transition-all duration-300 ease-in text-sm text-slate-600 md:text-base flex space-x-2">
                  <Image
                    src="/twitter.svg"
                    height={20}
                    width={20}
                    alt="logo twitter"
                  />
                  <Link href="/">Twitter</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-5 md:px-0">
        <div className="border-b-slate-500 border-[1px] mt-20"></div>
        <p className="mt-5 text-sm text-slate-600 ">© 2024 Zuhe Chia.</p>
      </div>
    </div>
  );
};

export default Footer;
