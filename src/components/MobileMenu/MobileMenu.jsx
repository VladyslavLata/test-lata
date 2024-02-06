import { useEffect } from 'react';
// import { useMediaQuery } from 'react-responsive';
import { useAppStore } from 'Store/Store';
import { BtnIcon } from '../BtnIcon/BtnIcon';
import { Logo } from 'components/Logo/Logo';
import { SearchInput } from 'components/SearchInput/SearchInput';
import { Container } from 'components/Container/Container';
import { NavList } from 'components/NavList/NavList';
import { LinckItem } from 'components/LinkItem/LinckItem';
import { icons } from 'consts/consts';
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

  const closeMenu = () => {
    setshowMobileMenu(false);
  };

  // const handleMediaQueryChange = matches => {
  //   console.log(matches);
  //   if (matches) {
  //     if (!showMobileMenu) {
  //       return;
  //     }
  //     // closeMenu();
  //     setshowMobileMenu(false);
  //   }
  // };

  // useMediaQuery({ minWidth: 1229 }, undefined, handleMediaQueryChange);

  return (
    <div
      className={`${styles.menu} ${
        showMobileMenu ? styles.openMobileMenu : ''
      } ${lightTheme ? styles.light : styles.dark}`}
    >
      <Container currentContainer="containerMenu">
        <div className={styles.logoWrapp}>
          <Logo main={true} />
          <BtnIcon
            name={'close mobile menu'}
            svg={Close}
            w={'23px'}
            h={'23px'}
            // onClick={() => setshowMobileMenu(false)}
            onClick={closeMenu}
          />
        </div>
        <SearchInput />
        <div className={styles.wrappLinks}>
          <nav className={styles.nav} role="navigation">
            <NavList onClick={closeMenu} />
          </nav>
        </div>
      </Container>
      <Container>
        <ul className={styles.linkList}>
          {icons.map(({ icon, alt }, i) => (
            <li key={alt}>
              <LinckItem icon={icon} alt={alt} text={`Menu item ${i + 1}`} />
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};
