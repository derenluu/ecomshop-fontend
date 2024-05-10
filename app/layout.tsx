import Footer from '@/components/Footer';
import Header from '@/components/Header';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '700', '800'],
});

export const metadata: Metadata = {
  title: 'Ecommerce Shop',
  description: 'Ecommerce Shop',
  // icons: {
  //   icon: [
  //     {
  //       url: '/gear.png',
  //       href: '/gear.png',
  //     },
  //   ],
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        {children}
        <Footer />
        {/* <Navbar />
        <ShopContextProvider></ShopContextProvider>
         */}
      </body>
    </html>
  );
}
