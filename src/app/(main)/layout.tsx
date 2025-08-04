import { Footer } from '@/app/_components/footer';
import { Header } from '@/app/_components/header';
import React from 'react';

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout(props: RootLayoutProps) {
  const { children } = props;

  return (
    <>
      <Header />
      <div className="left-sidebar rounded-lg hidden lg:flex">Your library</div>
      {children}
      <div className="right-sidebar rounded-lg hidden">Right sidebar</div>
      <Footer />
    </>
  );
}
