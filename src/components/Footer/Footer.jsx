import { useAppStore } from 'Store/Store';

import { FooterCard } from 'components/FooterCard/FooterCard';
import { ListFooter } from 'components/ListFooter/ListFooter';

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
        <div className={styles.listsWrap}>
          <ListFooter title={'Catehgory'} />
          <ListFooter title={'Play better'} />
          <ListFooter title={'Useful links'} />
        </div>
      </div>
    </footer>
  );
};
