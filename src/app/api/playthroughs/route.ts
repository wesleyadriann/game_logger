import { NextResponse } from "next/server";
import { getDocs, getDoc } from "firebase/firestore";

import { playthroughsCollection } from "~/app/services/firebase";

export async function GET() {
  const snapshot = await getDocs(playthroughsCollection);

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

  return NextResponse.json({ playthroughs }, { status: 200 });
}
