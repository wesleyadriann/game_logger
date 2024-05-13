import { getAuth } from "firebase/auth";

import { firebaseApp } from "./initialize";

export const auth = getAuth(firebaseApp);
