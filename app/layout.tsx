import Header from '@/components/Header';
import type { Metadata } from 'next';
import { Source_Code_Pro } from 'next/font/google';
import './globals.css';
import { ViewTransitions } from 'next-view-transitions';
import Footer from '@/components/Footer';
import ReactLenis from 'lenis/react';

const sourceCodePro = Source_Code_Pro({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Samil Salman',
  description: 'Software engineer | Creative Front-end developer',
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
          <body className={`${sourceCodePro.className} antialiased`}>
            <Header />
            <div className="pt-20" style={{ backgroundColor: 'var(--light)' }}>
              {children}
            </div>
            <Footer />
          </body>
        </ReactLenis>
      </html>
    </ViewTransitions>
  );
}
