import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/assets/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FooterColumn = ({ title, children }: any) => {
  return (
    <>
      <div className='flex flex-col gap-5'>
        <h4 className='text-lg font-bold whitespace-nowrap'>{title}</h4>
        {children}
      </div>
    </>
  );
};

const Footer = () => {
  return (
    <footer className='flex flex-col items-center w-full bg-gray-100 mx-auto py-14 pb-10'>
      <div className='w-full max-w-[1440px] px-6 lg:flex lg:justify-between lg:gap-x-14'>
        <div className='mb-5 lg:mb-0'>
          <Link href={'/'} className='text-xl font-bold'>
            Shopper
          </Link>
        </div>

        <div className='lg:flex lg:items-start lg:justify-between gap-16'>
          <div className='flex items-start justify-start gap-x-24 gap-y-5 lg:my-0 md:my-16 mb-3'>
            {FOOTER_LINKS.map((col, index) => (
              <FooterColumn key={col.title} title={col.title}>
                <ul className='flex flex-col text-[#A2A2A2] text-sm font-normal gap-4'>
                  {col.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link href={'/'}>{link}</Link>
                    </li>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
              {FOOTER_CONTACT_INFO.links.map((link, index) => (
                <Link
                  href={'/'}
                  key={link.label + index}
                  className='flex gap-4'
                >
                  <p className='text-sm text-[#7B7B7B] leading-[1.3]'>
                    {link.label}:{' '}
                    <span className='font-semibold'>{link.value}</span>
                  </p>
                </Link>
              ))}
            </FooterColumn>
          </div>

          <ul className='flex items-start justify-center gap-4'>
            {SOCIALS.links.map((link, index) => (
              <li key={index}>
                <Link href={'/'}>
                  <Image src={link} alt='socialIcon' width={22} height={22} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className='mt-3 text-center text-[#7B7B7B] text-sm font-normal'>
        2024 Shopper | All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
