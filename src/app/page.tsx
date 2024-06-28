import { redirect } from "next/navigation";

import { ROUTES } from "~/utils/routes";

export default function Home() {
  redirect(ROUTES.playthroughs);
  return <main></main>;
}
