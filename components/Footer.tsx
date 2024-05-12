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
    <>
      <footer className='flex w-full pb-14 pt-20'>
        <div className='flex flex-col w-full mx-auto max-w-full px-6 gap-14'>
          <div className='flex flex-row items-start justify-center gap-[10%]'>
            <Link href={'/'} className='mb-10 text-xl font-bold'>
              Shopper
            </Link>

            <div className='flex items-start justify-center gap-8'>
              {FOOTER_LINKS.map((col, index) => (
                <FooterColumn key={index} title={col.title}>
                  <ul className='flex flex-col text-[#A2A2A2] text-sm font-normal gap-4'>
                    {col.links.map((link) => (
                      <Link href={'/'} key={link}>
                        {link}
                      </Link>
                    ))}
                  </ul>
                </FooterColumn>
              ))}

              <div className='flex flex-col gap-5'>
                <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                  {FOOTER_CONTACT_INFO.links.map((link) => (
                    <Link href={'/'} key={link.label} className='flex gap-4'>
                      <p className='text-sm text-[#7B7B7B] leading-[1.3]'>
                        {link.label}:{' '}
                        <span className='text-sm font-semibold'>
                          {link.value}
                        </span>
                      </p>
                    </Link>
                  ))}
                </FooterColumn>
              </div>

              <div className='flex '>
                <FooterColumn>
                  <ul className='flex items-start  gap-4'>
                    {SOCIALS.links.map((link) => (
                      <Link href={'/'} key={link}>
                        <Image
                          src={link}
                          alt='socialIcon'
                          width={22}
                          height={22}
                        />
                      </Link>
                    ))}
                  </ul>
                </FooterColumn>
              </div>
            </div>
          </div>

          <div className='boder bg-[#A2A2A2]'></div>
          <p className='text-center text-[#7B7B7B] text-sm font-normal'>
            2024 Shopper | All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
