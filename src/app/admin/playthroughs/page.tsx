import Link from "next/link";

import { Button } from "~/components/Button";
import { ROUTES } from "~/utils/routes";

export default async function Games() {
  return (
    <main className="flex flex-col gap-4 p-4 m-auto max-w-screen-xl">
      <h1 className="font-bold text-4xl">Admin - Jogadas</h1>

      <Button href={ROUTES.adminPlaythrough}>Criar</Button>

      <div className="flex flex-wrap gap-4"></div>
    </main>
  );
}
