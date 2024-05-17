import { getAuth } from "firebase/auth";
import { getAuth as getAdminAuth } from "firebase-admin/auth";

import { firebaseApp, firebaseAdminApp } from "./initialize";
import { logger } from "~/utils";

export const auth = getAuth(firebaseApp);
export const adminAuth = getAdminAuth(firebaseAdminApp);

export const verifyIsAuth = async (idToken: string | null) => {
  logger("verifyIsAuth - start");
  try {
    if (!idToken) throw new Error("401");
    const decoded = await adminAuth.verifyIdToken(idToken);
    if (!decoded.uid) throw new Error("Invalid token");

    logger("verifyIsAuth - success");
    return decoded;
  } catch (_error) {
    const error = _error as Error;
    logger("verifyIsAuth - Exception", error.message);
    throw new Error("401");
  } finally {
    logger("verifyIsAuth - end");
  }
};
