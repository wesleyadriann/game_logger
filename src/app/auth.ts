import { cookies } from "next/headers";

export const LOCAL_STORAGE_KEY = "idToken";
const saveIdToken = (idToken: string) => {
  const cookiesInstance = cookies();
  cookiesInstance.set("idToken", idToken);
};

const getIdToken = () => {
  const cookiesInstance = cookies();
  return cookiesInstance.get("idToken");
};

const removeIdToken = () => {
  const cookiesInstance = cookies();
  cookiesInstance.delete("idToken");
};

export { saveIdToken, getIdToken, removeIdToken };
