import { useAppStore } from 'Store/Store';

import { cards } from 'consts/consts';
import image from '../../img/photo.webp';
import bigImage from '../../img/photo-x2.webp';
import { ReactComponent as Man } from '../../img/man.svg';
import { ReactComponent as Clock } from '../../img/clock.svg';
import styles from './CardsList.module.css';

export const CardsList = () => {
  const lightTheme = useAppStore(state => state.lightTheme);
  return (
    <>
      <h3
        className={`${styles.titleMain} ${
          lightTheme ? styles.light : styles.dark
        }`}
      >
        Similar articles
      </h3>
      <ul className={styles.cardsList}>
        {cards.map(({ title, name, date }) => (
          <li
            key={name}
            className={`${styles.card} ${
              lightTheme ? styles.cardLight : styles.cardDark
            }`}
          >
            <a className={styles.link} href="#">
              <div className={styles.imgWrapp}>
                <img
                  className={styles.image}
                  src={image}
                  alt="game world"
                  srcSet={`${image} 1x, ${bigImage} 2x`}
                />
              </div>
              <h4 className={styles.title}>{title}</h4>
              <div
                className={`${styles.footerCard} ${
                  lightTheme ? styles.footerCardLight : styles.footerCardDark
                }`}
              >
                <Man alt="man icon" fill="currentColor" />
                <p className={`${styles.text} ${styles.textPosition}`}>
                  {name}
                </p>
                <Clock alt="clock icon" fill="currentColor" />
                <p className={styles.text}>{date}</p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
