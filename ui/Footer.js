import React from 'react'

import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/news.png"
            alt="News app logo"
            height={32}
            width={32}
          />
          <h1 className="text-lg font-bold">NewsWorld WebApp</h1>
        </div>
        <p className="text-sm">&copy; 2023 News App. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
