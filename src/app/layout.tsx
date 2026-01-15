import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Tyranor',
    template: '%s | Tyranor',
  },
  description: 'Tyranor - Next.js 应用',
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="la-collect"
          src="//sdk.51.la/js-sdk-pro.min.js"
          strategy="afterInteractive"
        />
        <Script id="la-init" strategy="afterInteractive">
          {`LA.init({id:"L4O2vEqOVP3gRIRw",ck:"L4O2vEqOVP3gRIRw"})`}
        </Script>
      </head>
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
