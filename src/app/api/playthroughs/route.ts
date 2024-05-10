import { NextResponse } from "next/server";
import { getDocs, getDoc } from "firebase/firestore";

import { playthroughsCollection } from "~/services/firebase";
import { logger } from "~/utils/logger";

export async function GET() {
  logger("PLAYTHROUGHS.get - start");
  const snapshot = await getDocs(playthroughsCollection);

  logger("PLAYTHROUGHS.get - playthroughs", snapshot.docs.length);
  const promiseArr = snapshot.docs.map(async (doc) => {
    const game = await getDoc(doc.data().game);
    const platform = await getDoc(doc.data().platform);
    return {
      ...doc.data(),
      game: game.data(),
      platform: platform.data(),
      id: doc.id,
    };
  });

  const playthroughs = await Promise.all(promiseArr);

  logger("PLAYTHROUGHS.get - end");
  return NextResponse.json({ playthroughs }, { status: 200 });
}
