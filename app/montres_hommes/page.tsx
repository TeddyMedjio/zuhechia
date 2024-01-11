import { Metadata } from "next";
import Montres from "@/components/Montres";
import Newsletter from "@/components/Newsletter";
import Style from "@/components/Style";

export const metadata: Metadata = {
  title: "Montres-hommes ",
};

const Page = () => {
  return (
    <div>
      <Montres />
      <Newsletter />
      <Style />
    </div>
  );
};

export default Page;
