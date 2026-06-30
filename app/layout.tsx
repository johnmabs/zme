import type { Metadata } from "next";
import { displayFont, sansFont, monoFont } from "@/lib/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "ZME Engineering Group — Bureau d'études & d'ingénierie",
  description:
    "ZME Engineering Group accompagne entreprises, institutions et particuliers de la conception à la réalisation, au Congo-Brazzaville.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body
        className={`${displayFont.variable} ${sansFont.variable} ${monoFont.variable} font-sans bg-white text-ink-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
