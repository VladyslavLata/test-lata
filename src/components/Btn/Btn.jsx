import { useAppStore } from 'Store/Store';

import styles from './Btn.module.css';

export const Btn = ({ name, svg: Svg, onClick, text }) => {
  const lightTheme = useAppStore(state => state.lightTheme);
  return (
    <button
      type="button"
      className={`${styles.btn} ${
        lightTheme ? styles.btnLight : styles.btnDark
      }`}
      name={name}
      onClick={e => {
        onClick();
        e.currentTarget.blur();
      }}
    >
      <p>{text}</p>
      <Svg name="icon" fill="currentcolor" />
    </button>
  );
};
