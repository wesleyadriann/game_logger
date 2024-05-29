import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "./globals.css";
import Link from "next/link";

import { getIdToken } from "~/app/auth";

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
  const idToken = getIdToken();

  return (
    <html lang="pt-BR">
      <body
        className={`
        bg-slate-800 
        overflow-x-hidden
        text-white
        ${roboto.className}`}
      >
        <header className="flex justify-between m-auto max-w-screen-xl p-4 text-xl text-white/75">
          <div className="flex gap-4">
            <Link className="hover:text-white/100" href="/games">
              Games
            </Link>
            <Link className="hover:text-white/100" href="/playthroughs">
              Jogadas
            </Link>
            {idToken && (
              <>
                <Link className="hover:text-white/100" href="/admin/games">
                  Admin jogos
                </Link>
                <Link className="hover:text-white/100" href="/admin/games">
                  Admin jogadas
                </Link>
              </>
            )}
          </div>
          {!idToken && <Link href="/admin/login">Login</Link>}
        </header>
        {children}
      </body>
    </html>
  );
}
