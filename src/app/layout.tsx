import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "./globals.css";
import Link from "next/link";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata: Metadata = {
  title: "Game Logger",
  description: "Games played",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
        bg-slate-800 
        overflow-x-hidden
        text-white
        ${roboto.className}`}
      >
        <header className="flex gap-3 m-auto max-w-screen-xl p-4 text-xl text-white/75">
          <Link className="hover:text-white/100" href="/games">
            Games
          </Link>
          <Link className="hover:text-white/100" href="/playthroughs">
            Playthroughs
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
