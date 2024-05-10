'use client';

import { useState } from 'react';
import { MdCategory, MdContacts, MdHomeFilled, MdShop2 } from 'react-icons/md';

const Navbar = ({ navbarStyle }: { navbarStyle: string }) => {
  return (
    <>
      <nav className={navbarStyle}>
        <a href="/" className="flex items-center justify-center gap-x-1">
          <MdHomeFilled className="" /> Home
        </a>
        <a href="/mens" className="flex items-center justify-center gap-x-1">
          <MdCategory className="" /> Mens
        </a>
        <a href="/womens" className="flex items-center justify-center gap-x-1">
          <MdShop2 className="" /> Womens
        </a>
        <a href="/kids" className="flex items-center justify-center gap-x-1">
          <MdContacts className="" /> Kids
        </a>
      </nav>
    </>
  );
};

export default Navbar;
