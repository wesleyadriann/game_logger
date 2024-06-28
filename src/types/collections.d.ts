import { DocumentReference } from "firebase/firestore";

export interface IGames {
  id: string;
  name: string;
  image: string;
}

export interface IGamesCollection extends Omit<IGames, "id"> {}

export interface IPlatforms {
  id: string;
  color: string;
  name: string;
}

export interface IPlatformsCollection extends Omit<IPlatforms, "id"> {}

export interface IPlaythroughs {
  finish_date: string;
  game: IGamesCollection;
  mastered: boolean;
  mid_date: string;
  platform: IPlatforms;
  start_date: string;
  status: "completed" | "playing" | "backlog";
  total_hours: number;
  total_minutes: number;
  id: string;
}

export interface IPlaythroughsCollection extends Omit<IPlaythroughs | "id"> {
  game: DocumentReference<IGamesCollection>;
  platform: DocumentReference<IPlatformsCollection>;
}
