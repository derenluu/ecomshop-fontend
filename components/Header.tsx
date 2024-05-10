'use client';

import Logo from '@/assets/icons/logo.svg';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaOpencart } from 'react-icons/fa';
import { MdClose, MdMenu } from 'react-icons/md';
import { MdCategory, MdContacts, MdHomeFilled, MdShop2 } from 'react-icons/md';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);

  return (
    <>
      <header className="w-full mx-auto bg-white ring-1 ring-slate-900/5 px-6">
        <div className="flex items-center justify-between px-4 py-4">
          {/* Logo */}
          <div className="">
            <Link href={'/'}>
              <Image src={Logo} alt="Logo" height={88} width={88} />
            </Link>
          </div>

          <div className="flex items-center justify-center gap-x-10 text-lg font-semibold">
            <Link href="/" className="flex items-center justify-center gap-x-1">
              <MdHomeFilled className="" /> Home
            </Link>
            <Link
              href="/mens"
              className="flex items-center justify-center gap-x-1"
            >
              <MdCategory className="" /> Mens
            </Link>
            <Link
              href="/womens"
              className="flex items-center justify-center gap-x-1"
            >
              <MdShop2 className="" /> Womens
            </Link>
            <Link
              href="/kids"
              className="flex items-center justify-center gap-x-1"
            >
              <MdContacts className="" /> Kids
            </Link>
          </div>

          <div className="flex items-center justify-center gap-x-10">
            <div className=""> <FaOpencart /></div>
            <div className=""> login</div>
          </div>



          {/* Navbar desktop*/}
          {/* <Navbar /> */}
          {/* Navbar mobile*/}
          {/* <Navbar
            navbarStyle={`${
              menuOpened
                ? 'flex items-start flex-col gap-y-5 fixed top-20 right-8 p-5 bg-white rounded-3xl shadow-md w-64 text-[16px] font-semibold ring-1 ring-slate-900/5 transition-all duration-300'
                : 'flex items-start flex-col gap-y-12 fixed right-8 p-12 bg-white rounded-3xl shadow-md w-64 text-[16px] font-semibold ring-1 ring-slate-900/5 transition-all duration-300 -top-[100%]'
            }`}
          />
          <div className="flex items-center justify-between sm:gap-x-16 bold-16">
            {!menuOpened ? (
              <MdMenu
                className="md:hidden cursor-pointer mr-2 p-1 ring-1 ring-slate-900/5 h-8 w-8 rounded-full hover:text-secondary hover:ring-secondary"
                onClick={toggleMenu}
              />
            ) : (
              <MdClose
                className="md:hidden cursor-pointer mr-2 p-1 ring-1 ring-slate-900/5 h-8 w-8 rounded-full hover:text-secondary hover:ring-secondary"
                onClick={toggleMenu}
              />
            )}
            <div className="flex items-center justify-between sm:gap-x-6"></div>
          </div> */}

          {/* Login */}
          {/* <div className=""></div> */}
          {/* <button>Button</button> */}
        </div>
      </header>
    </>
  );
};

export default Header;
