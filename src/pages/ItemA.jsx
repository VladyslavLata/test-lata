import { Container } from 'components/Container/Container';
import { Banner } from 'components/Banner/Banner';
import { MainContentBox } from 'components/MainContentBox/MainContentBox';
import { Poster } from 'components/Poster/Poster';

import styles from './Home.module.css';
export const ItemA = () => {
  return (
    <section className={styles.section}>
      <Banner />
      <Container>
        <div className={styles.contentWrapp}>
          <MainContentBox />
          <Poster />
        </div>
      </Container>
    </section>
  );
};
