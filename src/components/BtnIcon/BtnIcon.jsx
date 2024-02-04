import styles from "./BtnIcon.module.css";

export const BtnIcon = ({ name, svg: Svg, w = 20, h = 20, onClick }) => {
  return (
    <button
      type="button"
      className={`${styles.btn} ${
        name === "menu" ? styles.btnMenu : styles.btnClose
      }`}
      name={name === "menu" ? "open mobile menu" : "close mobile menu"}
      onClick={(e) => {
        onClick();
        e.currentTarget.blur();
      }}
    >
      <Svg name="icon" width={w} height={h} fill="currentcolor" />
    </button>
  );
};
