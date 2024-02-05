import { NavLink } from 'react-router-dom';
import { useAppStore } from 'Store/Store';

import styles from './NavList.module.css';

const links = [
  { link: 'Home', path: '/' },
  { link: 'item B', path: 'item_b' },
  { link: 'item C', path: 'item_c' },
  { link: 'item D', path: 'item_d' },
  { link: 'item E', path: 'item_e' },
  { link: 'item F', path: 'item_f' },
  { link: 'item G', path: 'item_g' },
  { link: 'item H', path: 'item_h' },
];

export const NavList = () => {
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
          >
            {link}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
