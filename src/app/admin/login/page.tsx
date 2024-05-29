"use client";

import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

import { fetchApi } from "~/services/fetch";
import { saveIdToken } from "~/utils/authClient";

import { Loader, Button } from "~/components";

const doLogin = async (email: string, password: string) => {
  const response = await fetchApi<{ idToken: string }>(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/login`,
    { method: "POST", body: JSON.stringify({ email, password }) }
  );
  return response.data;
};

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const router = useRouter();

  const handlerLogin = useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();
      setIsLoading(true);
      setHasError(false);
      try {
        const response = await doLogin(credentials.email, credentials.password);
        saveIdToken(response.idToken);
        router.push("/admin/games");
      } catch (_error) {
        const error: Error = _error as Error;
        console.log("Error to login", error.message);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    },
    [credentials.email, credentials.password, router]
  );

  const handlerChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setCredentials((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    },
    []
  );

  return (
    <main className="flex flex-col gap-4 p-4 m-auto max-w-screen-xl">
      <h1 className="font-bold text-4xl">Login</h1>
      <form
        className="flex flex-col gap-4 m-auto w-full max-w-lg"
        onSubmit={handlerLogin}
      >
        <label className="flex flex-col gap-2">
          Email
          <input
            className="border border-gray-300 p-2 rounded text-black disabled:bg-slate-400 disabled:border-slate-400"
            disabled={isLoading}
            name="email"
            onChange={handlerChange}
            type="email"
          />
        </label>
        <label className="flex flex-col gap-2">
          Senha
          <input
            className="border border-gray-300 p-2 rounded text-black disabled:bg-slate-400 disabled:border-slate-400"
            disabled={isLoading}
            name="password"
            onChange={handlerChange}
            type="password"
          />
        </label>
        <Button type="submit" isLoading={isLoading}>
          Entrar
        </Button>
        {hasError && (
          <div className="text-red-500">Houve um erro para efetuar o login</div>
        )}
      </form>
    </main>
  );
}
