import Image from "next/image";

import { IGames } from "~/types/collections";

const getGames = async () => {
  const response = await fetch(`${process.env.PUBLIC_HOST}/api/games`);
  return response.json() as Promise<{
    games: IGames[];
  }>;
};

export default async function Games() {
  const { games } = await getGames();
  return (
    <main className="flex flex-col gap-4 p-4 m-auto max-w-screen-xl">
      <h1 className="font-bold text-4xl">Jogos Cadastrados</h1>
      <div className="flex flex-wrap gap-4">
        {games.map((game) => (
          <div
            key={game.id}
            className="
            duration-300
            flex
            group
            h-64
            hover:scale-105
            items-center
            justify-center
            overflow-hidden
            pb-2
            rounded-lg
            relative
            shadow-md
            transition-transform
            w-48"
          >
            <span
              className="
              text-center
              duration-500
              bg-gray-800/75
              group-hover:opacity-100
              group-hover:translate-y-0
              group-hover:scale-105
              opacity-0
              p-1
              select-none
              text-2xl
              transition-all
              translate-y-10
              w-full
              z-10"
            >
              {game.name}
            </span>
            <Image
              className="
                transition-all
                group-hover:blur-sm
              "
              alt={game.name}
              fill
              src={game.image}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
