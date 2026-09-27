import React from 'react';
import logo from '@/app/image/logo.png';
import Image from 'next/image';

const FooterPage = () => {
    return (
      
            <div className="footer sm:footer-horizontal container mx-auto px-8 bg-base-200 shadow-sm border-t-1 border-gray-700 text-neutral-content items-center p-4 h-[100px]">
  <aside className="grid-flow-col items-center">
                <Image src={logo} alt="FITLOG logo" width={20} height={20}></Image>
                <h1 className="text-md font-bold">FITLOG</h1>
  </aside>
  <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
    <p>© {new Date().getFullYear()} FitLog — Workout Library. Train hard, log honest.</p>
  </nav>
</div>
    
    );
};

export default FooterPage;