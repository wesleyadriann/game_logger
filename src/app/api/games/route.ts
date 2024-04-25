import { NextResponse } from "next/server";
import { getDocs } from "firebase/firestore";

import { gamesCollection } from "~/services/firebase";

export async function GET() {
  const snapshot = await getDocs(gamesCollection);

  const games = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

  return NextResponse.json({ games }, { status: 200 });
}
