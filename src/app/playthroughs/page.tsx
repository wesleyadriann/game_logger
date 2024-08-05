import React from "react";
import Image from "next/image";
import { format } from "date-fns";

import { IPlaythroughs } from "~/types/collections";

import { fetchApi } from "~/services/fetch";
import { logger } from "~/utils/logger";
import { STATUS } from "~/utils/translate";

import { Trophy, Clock, Control, Calendar, Flag, Lists } from "~/icons";

const getPlaythroughs = async () => {
  try {
    const response = await fetchApi<{ playthroughs: IPlaythroughs[] }>(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/playthroughs`
    );

    return response.data;
  } catch (_error) {
    const error = _error as Error;
    logger("Error fetching playthroughs", error?.message);
    return { playthroughs: [] };
  }
};

export default async function Games() {
  const { playthroughs } = await getPlaythroughs();

  return (
    <main className="flex flex-col gap-4 p-4 m-auto max-w-screen-xl">
      <h1 className="font-bold text-4xl">Jogadas</h1>
      <div className="flex flex-wrap gap-4">
        {playthroughs.map((playthrough) => (
          <div
            className="
              bg-slate-700
              flex
              h-fit
              rounded-lg
              overflow-hidden
              shadow-sm
              hover:brightness-110
            "
            key={playthrough.id}
          >
            <div className="relative w-32">
              <Image
                alt={playthrough.game.name}
                fill
                src={playthrough.game.image}
              />
            </div>
            <div className="flex flex-col p-2">
              <div className="flex font-semibold gap-1 items-center text-lg">
                {playthrough.game.name}
                {playthrough.mastered && <Trophy />}
              </div>
              <div className="flex items-center mb-2">
                <span
                  className="text-white text-xs px-1 rounded-full"
                  style={{ background: playthrough.platform.color }}
                >
                  {playthrough.platform.name}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Lists />
                {playthrough.status in STATUS && STATUS[playthrough.status]}
              </div>
              <div className="flex items-center gap-1">
                <Calendar />
                <span>
                  {format(playthrough.start_date, "dd/MM/yyyy")} ➞{" "}
                  {format(playthrough.finish_date, "dd/MM/yyyy")}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Flag />
                {format(playthrough.mid_date, "dd/MM/yyyy")}
              </div>
              <div className="flex items-center gap-1">
                <Clock />
                {playthrough.total_hours}h {playthrough.total_minutes}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
