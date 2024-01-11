import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: {
    default: "Zuhe Chia",
    template: "%s | Zuhe Chia",
  },
  description: "Expert des montres de luxes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <meta name="author" content="Zuhe Chia" />
      <meta
        property="og:title"
        content="Zuhe Chia • Expert des montres de luxes"
      />
      <meta
        property="og:description"
        content="Expert des montres de luxes. © Code by Medjio"
      />
      <meta
        property="og:image"
        content="https://res.cloudinary.com/dqfd5g2fd/image/upload/v1704883023/nrsbuxkj15jtxege8ca2.jpg"
      />
      <meta property="og:site_name" content="Zuhe Chia" />
      <meta property="og:locale" content="fr" />
      <meta property="og:type" content="website" />
      <meta
        property="twitter:title"
        content="Zuhe Chia • Expert des montres de luxes"
      />
      <meta
        property="twitter:description"
        content="Expert des montres de luxes. © Code by Medjio"
      />
      <meta
        property="twitter:image"
        content="https://res.cloudinary.com/dqfd5g2fd/image/upload/v1704883023/nrsbuxkj15jtxege8ca2.jpg"
      />
      <meta name="twitter:card" content="summary_large_image" />

      <meta
        name="keywords"
        content="Watch, luxury, luxe, billionaire, millionnaire, joallerie, maroquinerie, gold, silver, leather"
      />

      <meta name="twitter:author" content="@zuhechia" />
      <meta name="twitter:site" content="@zuhechia" />
      <body>
        <Navbar />
        <main className="antiakiased bg-black">{children}</main>
      </body>
    </html>
  );
}
