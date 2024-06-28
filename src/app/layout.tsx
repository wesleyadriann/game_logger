import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import Link from "next/link";
import { ptBR } from "date-fns/locale";
import { setDefaultOptions } from "date-fns";

import "./globals.css";

import { getIdToken } from "~/app/auth";
import { ROUTES } from "~/utils/routes";

setDefaultOptions({ locale: ptBR });

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
            <Link
              className="hover:text-white/100 hover:underline"
              href={ROUTES.playthroughs}
            >
              Jogadas
            </Link>
            <Link
              className="hover:text-white/100 hover:underline"
              href={ROUTES.games}
            >
              Jogos
            </Link>
            {idToken && (
              <>
                <Link
                  className="hover:text-white/100 hover:underline"
                  href={ROUTES.adminPlaythroughs}
                >
                  Admin jogadas
                </Link>
                <Link
                  className="hover:text-white/100 hover:underline"
                  href={ROUTES.adminGames}
                >
                  Admin jogos
                </Link>
              </>
            )}
          </div>
          {!idToken && <Link href={ROUTES.adminLogin}>Entrar</Link>}
        </header>
        {children}
      </body>
    </html>
  );
}
