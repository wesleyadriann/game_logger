import Image from "next/image";

import { IGamesCollection } from "~/types/collections";

const getGames = async () => {
  const response = await fetch("http://localhost:3000/api/games");
  return (await response.json()) as {
    games: (IGamesCollection & { id: string })[];
  };
};

export default async function Games() {
  const { games } = await getGames();
  return (
    <main className="flex flex-col gap-4 p-4">
      <h1 className="text-4xl">Jogos Cadastrados</h1>
      <div className="flex gap-4">
        {games.map((game) => (
          <div
            key={game.id}
            className="
            duration-300
            flex
            group
            h-64
            hover:scale-105
            items-end
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
              duration-500
              group-hover:translate-y-0
              group-hover:scale-105
              select-none
              text-2xl
              transition-transform
              translate-y-10
              z-10"
            >
              {game.name}
            </span>
            <Image
              className="aspect-[4/3]"
              alt={game.name}
              src={game.image}
              fill
            />
          </div>
        ))}
      </div>
    </main>
  );
}
