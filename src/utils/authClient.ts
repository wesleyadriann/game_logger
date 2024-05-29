export const LOCAL_STORAGE_KEY = "idToken";
const saveIdToken = (idToken: string) => {
  if (window.localStorage)
    window.localStorage.setItem(LOCAL_STORAGE_KEY, idToken);
};

const getIdToken = () => {
  if (window.localStorage)
    return window.localStorage.getItem(LOCAL_STORAGE_KEY);
};

const removeIdToken = () => {
  if (window.localStorage) window.localStorage.removeItem(LOCAL_STORAGE_KEY);
};

export { saveIdToken, getIdToken, removeIdToken };
