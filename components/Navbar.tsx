'use client';

import Link from 'next/link';
import { useState } from 'react';
import { MdCategory, MdContacts, MdHomeFilled, MdShop2 } from 'react-icons/md';

interface NavbarProps {
  navbarStyle: string;
}

const Navbar = ({ navbarStyle }: NavbarProps) => {
  const [active, setActive] = useState('/');

  const handleLinkClick = (categoryName: string) => {
    setActive(categoryName);
  };
  return (
    <>
      <div className={navbarStyle}>
        <Link
          href='/'
          className={`flex items-center justify-center gap-x-1 ${
            active === '/'
              ? 'text-secondary relative flex-1 after:w-full after:h-[2px] after:bg-secondary after:absolute after:-bottom-1 after:text-xl after:right-0'
              : ''
          } `}
          onClick={() => handleLinkClick('/')}
        >
          <MdHomeFilled className='' /> Home
        </Link>
        <Link
          href='/men'
          className={`flex items-center justify-center gap-x-1 ${
            active === '/men'
              ? 'text-secondary relative flex-1 after:w-full after:h-[2px] after:bg-secondary after:absolute after:-bottom-1 after:text-xl after:right-0'
              : ''
          } `}
          onClick={() => handleLinkClick('/men')}
        >
          <MdCategory className='' /> Men&#8217;s
        </Link>
        <Link
          href='/women'
          className={`flex items-center justify-center gap-x-1 ${
            active === '/women'
              ? 'text-secondary relative flex-1 after:w-full after:h-[2px] after:bg-secondary after:absolute after:-bottom-1 after:text-xl after:right-0'
              : ''
          } `}
          onClick={() => handleLinkClick('/women')}
        >
          <MdShop2 className='' /> Women&#8217;s
        </Link>
        <Link
          href='/kid'
          className={`flex items-center justify-center gap-x-1 ${
            active === '/kid'
              ? 'text-secondary relative flex-1 after:w-full after:h-[2px] after:bg-secondary after:absolute after:-bottom-1 after:text-xl after:right-0'
              : ''
          } `}
          onClick={() => handleLinkClick('/kid')}
        >
          <MdContacts className='' /> Kids
        </Link>
      </div>
    </>
  );
};

export default Navbar;
