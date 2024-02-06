import { useAppStore } from 'Store/Store';

import { FooterCard } from 'components/FooterCard/FooterCard';
import { Container } from 'components/Container/Container';

import styles from './Footer.module.css';

export const Footer = () => {
  const lightTheme = useAppStore(state => state.lightTheme);
  return (
    <footer
      className={`${styles.footer} ${
        lightTheme ? styles.bgLight : styles.bgDark
      }`}
    >
      <div className={styles.footerContentWrapp}>
        <FooterCard />
      </div>
    </footer>
  );
};
