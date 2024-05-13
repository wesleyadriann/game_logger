"use client";

import { useCallback, useState } from "react";

import { fetchApi } from "~/services/fetch";

const doLogin = async (email: string, password: string) => {
  try {
    const response = await fetchApi(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/admin/login`,
      { method: "POST", body: JSON.stringify({ email, password }) }
    );
    return response.data;
  } catch (error) {
    return {};
  }
};

export default function Login() {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handlerLogin = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      doLogin(credentials.email, credentials.password);
    },
    [credentials.email, credentials.password]
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
            className="border border-gray-300 p-2 rounded text-black"
            name="email"
            onChange={handlerChange}
            type="email"
          />
        </label>
        <label className="flex flex-col gap-2">
          Senha
          <input
            className="border border-gray-300 p-2 rounded text-black"
            name="password"
            onChange={handlerChange}
            type="password"
          />
        </label>
        <button className="bg-blue-500 p-2 rounded text-white" type="submit">
          Entrar
        </button>
      </form>
    </main>
  );
}
