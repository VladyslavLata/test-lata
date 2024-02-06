import { useAppStore } from 'Store/Store';

import styles from './SocialLinck.module.css';

export const SocialLinck = ({ lincks, main }) => {
  const lightTheme = useAppStore(state => state.lightTheme);
  return (
    <ul
      className={`${styles.lincksList} ${
        main ? styles.mainList : styles.secondList
      }`}
    >
      {lincks.map(({ icon: Icon, alt, path, w, h }) => (
        <li key={alt}>
          <a
            className={`${styles.linck} ${
              main ? styles.linckMain : styles.linckSecond
            } ${lightTheme && !main ? styles.light : styles.dark}`}
            href={path}
            target="_blanck"
            rel="noopener noreferrer"
            onClick={e => {
              e.currentTarget.blur();
            }}
          >
            <Icon width={w} height={h} alt={alt} fill="currentColor" />
          </a>
        </li>
      ))}
    </ul>
  );
};
