import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useAppStore } from 'Store/Store';

import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';

import styles from './SharedLayout.module.css';

export const SharedLayout = () => {
  const lightTheme = useAppStore(state => state.lightTheme);
  return (
    <>
      <Header />
      <main
        className={`${styles.main} ${
          lightTheme ? styles.mainLight : styles.mainDark
        }`}
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};
