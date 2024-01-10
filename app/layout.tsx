import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zuhe Chia",
  description: "Expert des montres de luxes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" ">{children}</body>
    </html>
  );
}
