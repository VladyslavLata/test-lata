import styles from './BtnIcon.module.css';

export const BtnIcon = ({ name, styleName = '', svg: Svg, w, h, onClick }) => {
  return (
    <button
      type="button"
      className={`${styles.btn} ${styles[styleName]}`}
      // name={name === "menu" ? "open mobile menu" : "close mobile menu"}
      name={name}
      onClick={e => {
        onClick();
        e.currentTarget.blur();
      }}
    >
      <Svg name="icon" width={w} height={h} fill="currentcolor" />
    </button>
  );
};
