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
        <div className="p-3 rounded-md bg-slate-700">
          <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
            <div className="w-full h-60 border rounded-sm border-white bg-center col-span-2 md:col-span-2 md:row-span-2 md:h-full bg-house-front"></div>
            <div className="w-full h-32 border rounded-sm border-white bg-center md:h-60 bg-house-interior"></div>
            <div className="w-full h-32 border rounded-sm border-white bg-center md:h-60 bg-house-interior2"></div>
          </div>

          <div className="text-2xl font-bold mt-3 text-white text-center">
            Modern House in the Woods
          </div>

          <div className="flex gap-2 my-3 justify-center items-center">
            <div className="rounded-full px-3 py-1 text-sm bg-green-600 text-white cursor-pointer hover:bg-green-700">
              Woods
            </div>
            <div className="rounded-full px-3 py-1 text-sm bg-green-600 text-white cursor-pointer hover:bg-green-700">
              Modern
            </div>
            <div className="rounded-full px-3 py-1 text-sm bg-green-600 text-white cursor-pointer hover:bg-green-700">
              Pool
            </div>
          </div>
          
          <div className="mt-8 text-center text-white px-4 sm:px-8 md:px-32">
            <p className="text-lg mb-4">
              This stunning modern house is located in the heart of the woods,
              offering peace, tranquility, and nature right at your doorstep.
              Enjoy the perfect blend of luxury and nature with spacious
              interiors, a modern design, and breathtaking views.
            </p>
            <h3 className="text-2xl font-semibold mb-6">
              Wanna live your dream?
            </h3>

            <div className="flex justify-center items-center gap-4">
              <div className="text-xl font-bold text-white">
                Price: $850,000
              </div>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-md text-lg">
                Buy Now
              </button>
            </div>
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
