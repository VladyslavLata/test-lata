import MediaQuery, { useMediaQuery } from 'react-responsive';
import { useState } from 'react';

import { NavigationBar } from 'components/NavigationBar/NavigationBar';
import { Logo } from 'components/Logo/Logo';
import { Container } from 'components/Container/Container';
import { NavList } from 'components/NavList/NavList';
import { SearchInput } from 'components/SearchInput/SearchInput';
import { BtnIcon } from 'components/BtnIcon/BtnIcon';
import { useAppStore } from 'Store/Store';
import { MobileMenu } from 'components/MobileMenu/MobileMenu';
import { ReactComponent as Menu } from '../../img/menu.svg';

import styles from './Header.module.css';

export const Header = () => {
  const [showMobileMenu, setshowMobileMenu] = useState(false);
  const lightTheme = useAppStore(state => state.lightTheme);

  const handleMediaQueryChange = matches => {
    if (matches) {
      if (!showMobileMenu) {
        return;
      }
      setshowMobileMenu(false);
    }
  };

  useMediaQuery({ minWidth: 1229 }, undefined, handleMediaQueryChange);

  return (
    <header
      className={`${styles.header} ${lightTheme ? styles.light : styles.dark}`}
    >
      <NavigationBar />
      <Container>
        <div className={styles.wrapp}>
          <nav className={styles.nav} role="navigation">
            <Logo main={true} />
            <MediaQuery minWidth={1230}>
              <NavList />
            </MediaQuery>
          </nav>
          <MediaQuery minWidth={1230}>
            <SearchInput />
          </MediaQuery>
          <MediaQuery maxWidth={1229}>
            <BtnIcon
              name={'open mobile menu'}
              svg={Menu}
              w={'26px'}
              h={'22px'}
              onClick={() => setshowMobileMenu(true)}
            />
          </MediaQuery>
        </div>
      </Container>
      <MediaQuery maxWidth={1229}>
        <MobileMenu
          showMobileMenu={showMobileMenu}
          setshowMobileMenu={setshowMobileMenu}
        />
      </MediaQuery>
    </header>
  );
};
