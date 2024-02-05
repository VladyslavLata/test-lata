import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useAppStore } from 'Store/Store';
import { BtnIcon } from '../BtnIcon/BtnIcon';
import { Logo } from 'components/Logo/Logo';
import { SearchInput } from 'components/SearchInput/SearchInput';
import { Container } from 'components/Container/Container';
import { ReactComponent as Close } from '../../img/close.svg';

import styles from './MobileMenu.module.css';

export const MobileMenu = ({ showMobileMenu, setshowMobileMenu }) => {
  const lightTheme = useAppStore(state => state.lightTheme);
  useEffect(() => {
    const body = document.body;
    let addStyleBody = null;

    const togleBodyStyles = param => {
      const bodyStyle = body.style;
      if (param) {
        bodyStyle.overflow = 'hidden';
        addStyleBody = setTimeout(() => {
          bodyStyle.visibility = 'hidden';
        }, 500);
      } else {
        bodyStyle.visibility = 'visible';
        bodyStyle.overflow = 'visible';
      }
    };

    togleBodyStyles(showMobileMenu);

    return () => {
      if (showMobileMenu) {
        togleBodyStyles(false);
      }
      clearTimeout(addStyleBody);
    };
  }, [showMobileMenu]);

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
    <div
      className={`${styles.menu} ${
        showMobileMenu ? styles.openMobileMenu : ''
      } ${lightTheme ? styles.light : styles.dark}`}
    >
      <Container>
        <div className={styles.logoWrapp}>
          <Logo main={true} />
          <BtnIcon
            name={'close mobile menu'}
            svg={Close}
            w={'23px'}
            h={'23px'}
            onClick={() => setshowMobileMenu(false)}
          />
        </div>
        <SearchInput />
        <nav role="navigation">
          {/* <ul>
            {navData.map(({ title, path }) => (
              <NavLink
                key={title}
                title={title}
                path={path}
                pathname={pathname}
                showMobileMenu={showMobileMenu}
                togleShowMobileMenu={setshowMobileMenu}
              />
            ))}
          </ul> */}
        </nav>
      </Container>
    </div>
  );
};
