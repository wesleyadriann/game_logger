"use client";

import { useCallback, useState } from "react";

import { Button } from "~/components";

export default function Games() {
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({});

  const handlerSubmit = useCallback(() => {}, []);

  const handlerChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      console.log(event.target.value);
      setForm((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }));
    },
    []
  );

  return (
    <main className="flex flex-col gap-4 p-4 m-auto max-w-screen-xl">
      <h1 className="font-bold text-4xl">Admin - Criar Jogada</h1>
      <div className="flex flex-wrap gap-4">
        <form
          className="flex flex-col gap-4 m-auto w-full max-w-lg"
          onSubmit={handlerSubmit}
        >
          <label className="flex flex-col gap-2">
            Jogo
            <input
              className="border border-gray-300 p-2 rounded text-black disabled:bg-slate-400 disabled:border-slate-400"
              disabled={isLoading}
              name="name"
              onChange={handlerChange}
            />
          </label>
          <label className="flex flex-col gap-2">
            Estado
            <select
              className="border border-gray-300 p-2 rounded text-black disabled:bg-slate-400 disabled:border-slate-400 border-r-8 border-r-transparent"
              name="status"
              onChange={handlerChange}
            >
              <option value="completed">Completo</option>
              <option value="played">Jogado</option>
              <option value="playing">Jogando</option>
              <option value="backlog">Aguardando</option>
            </select>
          </label>
          <label className="flex flex-col gap-2">
            Data de inicio
            <input
              className="border border-gray-300 p-2 rounded text-black disabled:bg-slate-400 disabled:border-slate-400"
              disabled={isLoading}
              name="start_date"
              onChange={handlerChange}
              type="date"
            />
          </label>
          <Button type="submit" isLoading={isLoading}>
            Entrar
          </Button>
          {/* {hasError && (
            <div className="text-red-500">
              Houve um erro para efetuar o login
            </div>
          )} */}
        </form>
      </div>
    </main>
  );
}
