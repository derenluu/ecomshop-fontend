import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/assets/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const FooterColumn = ({ title, children }) => {
  return (
    <div className='flex flex-col gap-5'>
      <h4 className='text-lg font-bold whitespace-nowrap'>{title}</h4>
      {children}
    </div>
  );
};

const Footer = () => {
  return (
    <footer className='flex flex-col items-center justify-center w-full py-10 bg-gray-100'>
      <div className='flex flex-col items-center justify-center w-full max-w-6xl px-6 md:flex-row md:justify-between'>
        <div className='flex items-center justify-center mb-8 md:mb-0'>
          <Link href={'/'} className='text-xl font-bold'>
            Shopper
          </Link>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {FOOTER_LINKS.map((col, index) => (
            <FooterColumn key={index} title={col.title}>
              <ul className='flex flex-col text-[#A2A2A2] text-sm font-normal gap-4'>
                {col.links.map((link, i) => (
                  <li key={i}>
                    <Link href={link.url}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </FooterColumn>
          ))}

          <FooterColumn title={FOOTER_CONTACT_INFO.title}>
            <ul className='flex flex-col gap-4'>
              {FOOTER_CONTACT_INFO.links.map((link, i) => (
                <li key={i}>
                  <p className='text-sm text-[#7B7B7B] leading-[1.3]'>
                    {link.label}:{' '}
                    <span className='font-semibold'>{link.value}</span>
                  </p>
                </li>
              ))}
            </ul>
          </FooterColumn>

          <FooterColumn>
            <ul className='flex gap-4'>
              {SOCIALS.links.map((link, i) => (
                <li key={i}>
                  <Link href={link.url}>
                    <Image
                      src={link.icon}
                      alt={link.label}
                      width={22}
                      height={22}
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </FooterColumn>
        </div>
      </div>

      <div className='w-full max-w-6xl mt-8 border-t border-gray-300'></div>

      <p className='mt-8 text-sm text-[#7B7B7B] font-normal'>
        © 2024 Shopper. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
