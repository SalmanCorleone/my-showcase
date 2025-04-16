import Header from '@/components/Header';
import type { Metadata } from 'next';
import { Source_Code_Pro } from 'next/font/google';
import './globals.css';
import { ViewTransitions } from 'next-view-transitions';
import Footer from '@/components/Footer';
import ReactLenis from 'lenis/react';
import Curtain from '@/components/Curtain';

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Samil Salman',
  description: 'Software engineer | Creative front-end developer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <ReactLenis root>
          <body className={`${sourceCodePro.className} antialiased relative`}>
            <Curtain>
              <>
                <Header />
                <div className="pt-20" style={{ backgroundColor: 'var(--light)' }}>
                  {children}
                </div>
                <Footer />
              </>
            </Curtain>
          </body>
        </ReactLenis>
      </html>
    </ViewTransitions>
  );
}
