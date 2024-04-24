import { getFirestore, collection } from "firebase/firestore";
import { CollectionReference } from "firebase/firestore";

import { IGamesCollection } from "~/types/collections";

import { firebaseApp } from "./initialize";

export const firestoreApp = getFirestore(firebaseApp);

export const gamesCollection = collection(
  firestoreApp,
  "games"
) as CollectionReference<IGamesCollection>;
