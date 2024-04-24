import { DocumentReference } from "firebase/firestore";

export interface IGames {
  id: string;
  name: string;
  image: string;
}

export interface IGamesCollection extends Omit<IGames, "id"> {}

export interface IPlaythroughs {
  finish_date: string;
  game: IGamesCollection;
  mastered: boolean;
  mid_date: string;
  platform: DocumentReference;
  start_date: string;
  status: string;
  total_hours: number;
  total_minutes: number;
  id: string;
}

export interface IPlaythroughsCollection extends Omit<IPlaythroughs | "id"> {
  game: DocumentReference<IGamesCollection>;
  platform: DocumentReference;
}
