import { getFirestore, collection } from "firebase/firestore";
import { CollectionReference } from "firebase/firestore";

import { IGamesCollection, IPlaythroughsCollection } from "~/types/collections";

import { firebaseApp } from "./initialize";

export const firestoreApp = getFirestore(firebaseApp);

export const gamesCollection = collection(
  firestoreApp,
  "games"
) as CollectionReference<IGamesCollection>;

export const playthroughsCollection = collection(
  firestoreApp,
  "playthroughs"
) as CollectionReference<IPlaythroughsCollection>;
