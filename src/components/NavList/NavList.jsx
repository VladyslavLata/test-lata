import { NavLink } from 'react-router-dom';
import { useAppStore } from 'Store/Store';
import { links } from 'consts/consts';

import styles from './NavList.module.css';

export const NavList = ({ onClick }) => {
  const lightTheme = useAppStore(state => state.lightTheme);
  return (
    <ul className={styles.list}>
      {links.map(({ link, path }) => (
        <li key={path} className={styles.item}>
          <NavLink
            to={path}
            className={`${styles.link} ${
              lightTheme ? styles.linkLight : styles.linkDark
            }`}
            onClick={() => {
              if (!onClick) {
                return;
              }
              onClick();
            }}
          >
            {link}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
