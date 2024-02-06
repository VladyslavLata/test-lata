import { useAppStore } from 'Store/Store';

import { CardsList } from 'components/CardsList/CardsList';

import styles from './MainContentBox.module.css';

export const MainContentBox = () => {
  const lightTheme = useAppStore(state => state.lightTheme);
  return (
    <div>
      <p className={styles.path}>
        Home &#10095; Lorem Ipsum is &#10095;
        <span className={styles.pathAccent}>Lorem Ipsum is simply dummy</span>
      </p>
      <h1 className={styles.title}>Lorem Ipsum is simply dummy</h1>
      <p
        className={`${styles.text} ${
          lightTheme ? styles.lightText : styles.darkText
        }`}
      >
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <CardsList />
    </div>
  );
};
