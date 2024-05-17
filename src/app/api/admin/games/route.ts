import { NextResponse, NextRequest } from "next/server";
import { setDoc, doc } from "firebase/firestore";

import { gamesCollection, adminAuth, verifyIsAuth } from "~/services/firebase";
import { logger, slugify } from "~/utils";

export async function POST(req: NextRequest) {
  logger("ADMIN.GAMES.post - start");
  try {
    const auth = req.headers.get("Authorization");
    await verifyIsAuth(auth);
    const body = await req.json();
    const nameSlug = slugify(body.name);

    await setDoc(doc(gamesCollection, nameSlug), body);
    return NextResponse.json({}, { status: 201 });
  } catch (_error) {
    const error = _error as Error;
    logger("ADMIN.GAMES.post - Exception", error.message);
    if (error.message === "401") return NextResponse.json({}, { status: 401 });
    return NextResponse.json({}, { status: 500 });
  } finally {
    logger("ADMIN.GAMES.post - end");
  }
}
