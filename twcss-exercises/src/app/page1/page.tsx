'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { pageLinks } from '../pagesConfig';


const Page = () => {
  const [pages, setPages] = useState<{ href: string; label: string }[]>([]);

  useEffect(() => {
    setPages(pageLinks);
  }, []);

  return (
    <div className="w-screen py-8 h-screen bg-gradient-to-r from-sky-800 to-gray-900 flex flex-col">
      <div className="container mx-auto w-2/3 flex-grow flex flex-col">
        <div className="flex-grow flex flex-col justify-center items-center text-center mb-8">
          <h1 className="text-white text-2xl font-bold mb-4">Exercício 5</h1>
          <p className="text-white mb-4">Animação de Loading</p>
          <div className="w-12 h-12 border-8 border-blue-200 border-r-blue-600 border-t-blue-600 rounded-full animate-spin"></div>
        </div>

        <div className="flex-grow flex flex-col justify-center items-center text-center mb-8">
          <h1 className="text-white text-2xl font-bold mb-4">Exercício 6</h1>
          <p className="text-white mb-4">Hero Card</p>
          <div className="w-3/4 p-6 overflow-hidden mx-auto bg-slate-800 border border-black rounded-xl flex flex-col justify-center items-center">
            <Image
              src="/images/avatar.jpg"
              alt=""
              width={72}
              height={72}
              className="rounded-full"
            ></Image>
            <div className="mt-4 italic text-md">
              &quot;Texto quote. Trocar para algo relevante. Mais um texto para
              preencher.&quot;
            </div>
            <div className="mt-4 text-sm font-bold text-sky-200">
              Guilherme Lopes
            </div>
            <div className="text-sm text-slate-100/90">Desenvolvedor, RJ</div>
          </div>
        </div>
      </div>

      {/* Pages Interaction */}
      <div className="bg-gray-900 text-white fixed bottom-0 w-full flex justify-center gap-4 py-4">
        {pages.map((page, index) => (
          <div key={index}>
            <Link href={page.href} className="underline text-white">
              {page.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
