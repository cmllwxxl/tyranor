import type { Metadata } from 'next';
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
        <script src="//sdk.51.la/js-sdk-pro.min.js" id="LA_COLLECT" />
        <script
          dangerouslySetInnerHTML={{
            __html: `LA.init({id:"L4O2vEqOVP3gRIRw",ck:"L4O2vEqOVP3gRIRw"})`,
          }}
        />
      </head>
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
