'use client';

import Logo from '@/assets/icons/logo.svg';
import LogoutIcon from '@/assets/icons/logout.svg';
import LoginIcon from '@/assets/icons/user.svg';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FaOpencart } from 'react-icons/fa';
import { MdClose, MdMenu } from 'react-icons/md';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMenu = () => setMenuOpened(!menuOpened);

  return (
    <>
      <header className='fixed top-0 left-0 z-10 m-auto w-full mx-auto bg-white ring-1 ring-slate-900/5 px-6'>
        <div className='flex items-center justify-between px-4 py-4'>
          {/* Logo */}
          <div className=''>
            <Link href={'/'}>
              <Image src={Logo} alt='Logo' height={88} width={88} />
            </Link>
          </div>

          {/* Navbar Desktop */}
          <Navbar navbarStyle='hidden lg:flex items-center justify-center gap-x-10 text-lg font-semibold' />

          {/* Navbar Mobile */}
          <Navbar
            navbarStyle={`${
              menuOpened
                ? 'flex items-start flex-col gap-y-5 fixed top-20 right-8 p-6 bg-white rounded-3xl shadow-md w-64 text-[16px] font-semibold ring-1 ring-slate-900/5 transition-all duration-300'
                : 'flex items-start flex-col gap-y-12 fixed top-20 p-6 bg-white rounded-3xl shadow-md w-64 text-[16px] font-semibold ring-1 ring-slate-900/5 transition-all duration-300 -right-[100%]'
            }`}
          />

          <div className='flex items-center justify-between gap-x-3'>
            <div className='lg:hidden'>
              {!menuOpened ? (
                <MdMenu
                  className={`cursor-pointer mr-2 p-1 ring-1 ring-slate-900/5 h-8 w-8 rounded-full hover:text-secondary hover:ring-secondary`}
                  onClick={toggleMenu}
                />
              ) : (
                <MdClose className={`cursor-pointer mr-2 p-1 ring-1 ring-secondary text-secondary h-8 w-8 rounded-full`} onClick={toggleMenu} />
              )}
            </div>

            <div className='flex items-center justify-between gap-x-5'>
              <Link href={'/cart'} className='flex items-center justify-between'>
                <FaOpencart className='p-1 h-8 w-8 ring-slate-900/30 ring-1 rounded-full' />
                <span className='relative flex items-center justify-center w-5 h-5 rounded-full bg-secondary text-white text-sm font-semibold -top-3 -left-1'>
                  0
                </span>
              </Link>

              {/* Login Button */}
              <Link
                href={'/login'}
                className='flex items-center justify-center gap-x-2 text-base font-semibold border border-secondary bg-secondary px-5 py-3 text-white transition-all hover:bg-[#ff6b1c] rounded-full'
              >
                <Image src={LoginIcon} alt='LoginIcon' width={19} height={19} />
                Login
              </Link>

              {/* Logout Button */}
              <Link
                href={'/logout'}
                className='flex hidden items-center justify-center gap-x-2 text-base font-semibold border border-secondary bg-secondary px-5 py-3 text-white transition-all hover:bg-[#ff6b1c] rounded-full'
              >
                <Image src={LogoutIcon} alt='LogoutIcon' width={19} height={19} />
                Logout
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
