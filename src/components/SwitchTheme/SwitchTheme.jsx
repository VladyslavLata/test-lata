import { useAppStore } from 'Store/Store';

import { ReactComponent as Sun } from '../../img/sun.svg';
import { ReactComponent as Moon } from '../../img/moon.svg';
import styles from './SwitchTheme.module.css';

export const SwitchTheme = () => {
  const { lightTheme, toggleTheme } = useAppStore();
  return (
    <label
      className={`${styles.switch} ${
        lightTheme ? styles.switchLightTheme : styles.switchDarcktTheme
      }`}
    >
      <input
        className={styles.hiddenInput}
        type="checkbox"
        checked={!lightTheme}
        onChange={toggleTheme}
      />
      <span
        className={`${styles.toggle} ${
          lightTheme ? styles.toggleLightTheme : styles.toggleDarcktTheme
        }`}
      >
        <Moon
          className={`${styles.icon} ${styles.moonIcon} ${
            lightTheme ? styles.hiddenInput : ''
          }`}
        />
        <Sun
          className={`${styles.icon} ${styles.sunIcon} ${
            !lightTheme ? styles.hiddenInput : ''
          }`}
        />
      </span>
    </label>
  );
};
