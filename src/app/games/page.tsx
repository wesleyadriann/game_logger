import Image from "next/image";

import { IGames } from "~/types/collections";

import { fetchApi } from "~/services/fetch";
import { logger } from "~/utils/logger";

const getGames = async () => {
  try {
    const response = await fetchApi<{ games: IGames[] }>(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/games`
    );
    return response.data;
  } catch (_error) {
    const error = _error as Error;
    logger("Error fetching games", error?.message);
    return { games: [] };
  }
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
