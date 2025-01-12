'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { pageLinks } from '../pagesConfig';

const Page = () => {
  const [pages, setPages] = useState<{ href: string; label: string }[]>([]);

  useEffect(() => {
    setPages(pageLinks);
  }, []);

  return (
    <div className="bg-white w-screen h-screen text-black">
      <div className="container mx-auto px-4">
        <table className="w-full mx-2">
          <thead>
            <tr className="border-b text-left text-sm border-gray-200">
              <th className="py-2">Nome</th>
              <th>Cargo</th>
              <th className="hidden md:table-cell">E-mail</th>
              <th className="hidden md:table-cell">Função</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
  <tr className="border-b text-left text-sm text-gray-400 border-gray-200">
    <td className="py-2">
      <p className="font-bold text-black">Guilherme Lopes</p>
      <p className="block md:hidden">CEO</p>
      <p className="block md:hidden">glopesglcontato@nixenterprise.com</p>
    </td>
    <td>CEO</td>
    <td className="hidden md:table-cell">glopesglcontato@nixenterprise.com</td>
    <td className="hidden md:table-cell">Administração</td>
    <td>
      <a className="text-gray-400 font-semibold hover:text-gray-950" href="">Editar</a>
    </td>
  </tr>
  <tr className="border-b text-left text-sm text-gray-400 border-gray-200">
    <td className="py-2">
      <p className="font-bold text-black">Mariana Silva</p>
      <p className="block md:hidden">CTO</p>
      <p className="block md:hidden">mariana.silva@nixenterprise.com</p>
    </td>
    <td>CTO</td>
    <td className="hidden md:table-cell">mariana.silva@nixenterprise.com</td>
    <td className="hidden md:table-cell">Tecnologia</td>
    <td>
      <a className="text-gray-400 font-semibold hover:text-gray-950" href="">Editar</a>
    </td>
  </tr>
  <tr className="border-b text-left text-sm text-gray-400 border-gray-200">
    <td className="py-2">
      <p className="font-bold text-black">Lucas Andrade</p>
      <p className="block md:hidden">CMO</p>
      <p className="block md:hidden">lucas.andrade@nixenterprise.com</p>
    </td>
    <td>CMO</td>
    <td className="hidden md:table-cell">lucas.andrade@nixenterprise.com</td>
    <td className="hidden md:table-cell">Marketing</td>
    <td>
      <a className="text-gray-400 font-semibold hover:text-gray-950" href="">Editar</a>
    </td>
  </tr>
  <tr className="border-b text-left text-sm text-gray-400 border-gray-200">
    <td className="py-2">
      <p className="font-bold text-black">Ana Costa</p>
      <p className="block md:hidden">CFO</p>
      <p className="block md:hidden">ana.costa@nixenterprise.com</p>
    </td>
    <td>CFO</td>
    <td className="hidden md:table-cell">ana.costa@nixenterprise.com</td>
    <td className="hidden md:table-cell">Financeiro</td>
    <td>
      <a className="text-gray-400 font-semibold hover:text-gray-950" href="">Editar</a>
    </td>
  </tr>
  <tr className="border-b text-left text-sm text-gray-400 border-gray-200">
    <td className="py-2">
      <p className="font-bold text-black">Pedro Almeida</p>
      <p className="block md:hidden">COO</p>
      <p className="block md:hidden">pedro.almeida@nixenterprise.com</p>
    </td>
    <td>COO</td>
    <td className="hidden md:table-cell">pedro.almeida@nixenterprise.com</td>
    <td className="hidden md:table-cell">Operações</td>
    <td>
      <a className="text-gray-400 font-semibold hover:text-gray-950" href="">Editar</a>
    </td>
  </tr>
  <tr className="border-b text-left text-sm text-gray-400 border-gray-200">
    <td className="py-2">
      <p className="font-bold text-black">Juliana Rocha</p>
      <p className="block md:hidden">CHRO</p>
      <p className="block md:hidden">juliana.rocha@nixenterprise.com</p>
    </td>
    <td>CHRO</td>
    <td className="hidden md:table-cell">juliana.rocha@nixenterprise.com</td>
    <td className="hidden md:table-cell">Recursos Humanos</td>
    <td>
      <a className="text-gray-400 font-semibold hover:text-gray-950" href="">Editar</a>
    </td>
  </tr>
</tbody>

        </table>
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
