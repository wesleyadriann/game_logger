import { NextResponse } from "next/server";
import { getDocs } from "firebase/firestore";

import { gamesCollection } from "~/services/firebase";
import { logger } from "~/utils/logger";

export async function GET() {
  logger("GAMES.get - start");
  const snapshot = await getDocs(gamesCollection);

  logger("GAMES.get - games", snapshot.docs.length);
  const games = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

  logger("GAMES.get - end");
  return NextResponse.json({ games }, { status: 200 });
}
