import { Link } from 'react-router-dom';

import { useAppStore } from 'Store/Store';

import styles from './Logo.module.css';

export const Logo = ({ main }) => {
  const lightTheme = useAppStore(state => state.lightTheme);
  return (
    <Link to="/">
      <p
        className={`${styles.logo} ${
          main ? styles.logoHeader : styles.logoFooter
        } ${lightTheme ? styles.light : styles.dark}`}
      >
        logotype
      </p>
    </Link>
  );
};
