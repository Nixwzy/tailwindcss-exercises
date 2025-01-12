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
