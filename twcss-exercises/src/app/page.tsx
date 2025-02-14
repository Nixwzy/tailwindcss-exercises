'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { pageLinks } from '../app/pagesConfig';


const Page = () => {
  const [pages, setPages] = useState<{ href: string; label: string }[]>([]);

  useEffect(() => {
    setPages(pageLinks);
  }, []);

  return (
    <div className="w-screen p-5 flex flex-col items-center justify-start">
      <div className="mb-4 text-center">
        <a
          href="https://www.b7web.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sky-300 hover:text-sky-400 text-lg font-semibold"
        >
          Exercícios utilizando TailwindCSS através do curso B7Web
        </a>
      </div>

      <div className="mb-4 text-center">
        <h2 className="text-xl font-semibold">Exercício 1</h2>
        <p className="">Design de Botões</p>
        <div className="mt-4 flex flex-col items-center space-y-4">
          <div className="cursor-pointer bg-blue-500 text-white rounded-md px-5 py-3 border-none">
            Clique aqui
          </div>
          <div className="cursor-pointer px-5 py-2 rounded-md border border-blue-500 text-white">
            Clique aqui
          </div>
        </div>
      </div>

      <div className="mb-4 text-center">
        <h2 className="text-xl font-semibold">Exercício 2</h2>
        <p className="">Alerta de Erro</p>
        <div className="mt-4 border-l-4 bg-yellow-100 rounded-sm border-yellow-500 p-3 text-yellow-700">
          Você não tem mais acesso.
          <a href="" className="underline ml-1">
            Faça o upgrade agora!
          </a>
        </div>
      </div>

      <div className="mb-4 text-center">
        <h2 className="text-xl font-semibold">Exercício 3</h2>
        <p className="">Invite Card</p>
        <div className="mt-4 w-96 rounded-md border border-gray-500 bg-white p-4">
          <div>
            <div className="inline-block">
              <Image
                className="rounded-full"
                width={56}
                height={56}
                alt=""
                src="/images/avatar.jpg"
              />
            </div>
            <div className="inline-block ml-5">
              <div className="text-black pb-2">Guilherme Lopes</div>
              <div className="text-gray-400">Te mandou um convite!</div>
            </div>
          </div>
          <div className="mt-4">
            <button className="rounded-md px-5 py-2 bg-blue-800 text-white">
              Aceitar
            </button>
            <button className="ml-3 rounded-md px-5 py-2 border border-gray-200 text-black">
              Negar
            </button>
          </div>
        </div>
      </div>

      <div className="mb-4 text-center">
        <h2 className="text-xl my-7 font-semibold">Exercício 4</h2>
        <div className="w-screen bg-gray-900 p-5">
          <h1 className="text-3xl font-bold text-center">Sistema de Login</h1>

          <div className="my-6">
            <label className="block text-lg mb-2" htmlFor="emailField">
              Endereço de e-mail
            </label>
            <input
              className="w-full p-2 rounded-md text-lg bg-gray-800 border border-gray-700 outline-gray-400"
              type="email"
              id="emailField"
            />
          </div>

          <div className="my-6">
            <label className="block text-lg mb-2" htmlFor="passwordField">
              Senha
            </label>
            <input
              className="w-full p-2 rounded-md text-lg bg-gray-800 border border-gray-700 outline-gray-400"
              type="password"
              id="passwordField"
            />
          </div>

          <div className="my-6">
            <button className="w-full p-2 rounded-md text-lg font-bold border-none text-white bg-gray-700">
              Entrar
            </button>
          </div>
          <div className="text-center text-gray-300">
            Não é membro?{' '}
            <a className="font-bold text-gray-200" href="">
              Faça seu cadastro agora!
            </a>
          </div>
        </div>
      </div>

      {/* Pages Interaction */}
      <div className="flex justify-center gap-4 mt-8">
        {pages.map((page, index) => (
          <div key={index}>
            <Link href={page.href} className="underline">
              {page.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
