import { NextRequest, NextResponse } from "next/server";
import { signInWithEmailAndPassword, AuthError } from "firebase/auth";
import { cookies } from "next/headers";

import { auth } from "~/services/firebase";
import { logger } from "~/utils/logger";

export async function POST(req: NextRequest) {
  logger("ADMIN.LOGIN.post - start");
  try {
    const body = await req.json();
    logger("ADMIN.LOGIN.post - email", body.email);
    const userCredential = await signInWithEmailAndPassword(
      auth,
      body.email,
      body.password
    );
    const idToken = await userCredential.user.getIdToken();
    cookies().set("idToken", idToken);
    return NextResponse.json({ idToken }, { status: 200 });
  } catch (_error) {
    const error = _error as AuthError;
    const errorCode = error.code;
    const errorMessage = error.message;
    logger("ADMIN.LOGIN.post - Exception", errorCode, errorMessage);
    return NextResponse.json({ errorCode, errorMessage }, { status: 500 });
  } finally {
    logger("ADMIN.LOGIN.post - end");
  }
}
