'use client';

import Link from 'next/link';
import { useState } from 'react';
import { MdCategory, MdContacts, MdHomeFilled, MdShop2 } from 'react-icons/md';

const Navbar = ({ navbarStyle }: { navbarStyle: string }) => {
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
              ? 'relative flex-1 text-secondary after:w-full after:h-[-1px] after:bg-secondary after:absolute after:-bottom-3 after:right-0'
              : ''
          } `}
          onClick={() => handleLinkClick('/')}
        >
          <MdHomeFilled className='' /> Home
        </Link>
        <Link
          href='/mens'
          className={`flex items-center justify-center gap-x-1 ${
            active === '/mens'
              ? 'relative flex-1 text-secondary after:w-full after:h-[-1px] after:bg-secondary after:absolute after:-bottom-3 after:right-0'
              : ''
          } `}
          onClick={() => handleLinkClick('/mens')}
        >
          <MdCategory className='' /> Mens
        </Link>
        <Link
          href='/womens'
          className={`flex items-center justify-center gap-x-1 ${
            active === '/womens'
              ? 'relative flex-1 text-secondary after:w-full after:h-[-1px] after:bg-secondary after:absolute after:-bottom-3 after:right-0'
              : ''
          } `}
          onClick={() => handleLinkClick('/womens')}
        >
          <MdShop2 className='' /> Womens
        </Link>
        <Link
          href='/kids'
          className={`flex items-center justify-center gap-x-1 ${
            active === '/kids'
              ? 'relative flex-1 text-secondary after:w-full after:h-[-1px] after:bg-secondary after:absolute after:-bottom-3 after:right-0'
              : ''
          } `}
          onClick={() => handleLinkClick('/kids')}
        >
          <MdContacts className='' /> Kids
        </Link>
      </div>
    </>
  );
};

export default Navbar;
