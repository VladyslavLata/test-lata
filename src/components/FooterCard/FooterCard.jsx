import { useAppStore } from 'Store/Store';
import { SocialLinck } from 'components/SocialLinck/SocialLinck';
import { Logo } from 'components/Logo/Logo';
import { socialLincksBig } from 'consts/consts';

import styles from './FooterCard.module.css';

export const FooterCard = () => {
  const lightTheme = useAppStore(state => state.lightTheme);
  return (
    <div
      className={`${styles.card} ${
        lightTheme ? styles.cardLight : styles.cardDark
      }`}
    >
      <Logo />
      <div
        className={`${styles.textWrapp} ${
          lightTheme ? styles.light : styles.dark
        }`}
      >
        <p className={styles.text}>Lorem Ipsum is simply dummy</p>
        <p className={styles.text}>
          when an unknown printer took a galley of type and scrambled it to make
          a type specimen book. It has survived not only five
        </p>
      </div>
      <SocialLinck lincks={socialLincksBig} />
    </div>
  );
};
