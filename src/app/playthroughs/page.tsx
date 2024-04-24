import Image from "next/image";

import { IPlaythroughs } from "~/types/collections";

const getPlaythroughs = async () => {
  const response = await fetch(`${process.env.PUBLIC_HOST}/api/playthroughs`);
  return response.json() as Promise<{
    playthroughs: IPlaythroughs[];
  }>;
};

export default async function Games() {
  const { playthroughs } = await getPlaythroughs();
  return (
    <main className="flex flex-col gap-4 p-4 m-auto max-w-screen-xl">
      <h1 className="font-bold text-4xl">Playthroughs</h1>
      <div className="flex flex-wrap gap-4">
        {playthroughs.map((playthrough) => (
          <>
            <div
              key={playthrough.id}
              className="
                h-28
                overflow-hidden
                rounded-lg
                relative
                w-20"
            >
              <Image
                alt={playthrough.game.name}
                fill
                src={playthrough.game.image}
              />
            </div>
            <span>{playthrough.game.name}</span>
          </>
        ))}
      </div>
    </main>
  );
}
