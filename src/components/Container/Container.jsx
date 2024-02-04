import styles from "./Container.module.css";

export const Container = ({ currentContainer = "", children }) => {
  return (
    <div className={`${styles.container} ${styles[currentContainer]}`}>
      {children}
    </div>
  );
};
