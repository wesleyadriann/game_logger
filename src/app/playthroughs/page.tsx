import Image from "next/image";

import { IPlaythroughs } from "~/types/collections";

import { fetchApi } from "~/services/fetch";

const getPlaythroughs = async () => {
  try {
    const response = await fetchApi<{ playthroughs: IPlaythroughs[] }>(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/playthroughs`
    );

    return response.data;
  } catch (error) {
    return { playthroughs: [] };
  }
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
