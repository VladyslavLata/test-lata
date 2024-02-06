import styles from './Poster.module.css';

export const Poster = () => {
  return (
    <div>
      <div className={styles.posterWrapp}>
        <div>
          <p>ADS</p>
          <p className={styles.text}>300x600</p>
        </div>
      </div>
    </div>
  );
};
