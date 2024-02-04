import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Header } from 'components/Header/Header';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <p>HHHHHHHHHHHHHHHHHHHHHHHHHHH</p>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
