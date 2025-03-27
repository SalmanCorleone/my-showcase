import Header from '@/components/Header';
import type { Metadata } from 'next';
import { Source_Code_Pro } from 'next/font/google';
import './globals.css';
import { ViewTransitions } from 'next-view-transitions';

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
        <body className={`${sourceCodePro.className} antialiased`}>
          <Header />
          <div className="mt-20">{children}</div>
        </body>
      </html>
    </ViewTransitions>
  );
}
