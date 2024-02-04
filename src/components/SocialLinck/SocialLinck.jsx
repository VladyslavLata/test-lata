import styles from './SocialLinck.module.css';

export const SocialLinck = ({ lincks, main }) => {
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
            }`}
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
