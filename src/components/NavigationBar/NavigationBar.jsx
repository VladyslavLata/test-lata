import MediaQuery from 'react-responsive';

import { LinckItem } from 'components/LinkItem/LinckItem';
import { SocialLinck } from 'components/SocialLinck/SocialLinck';
import { Container } from 'components/Container/Container';
import { SwitchTheme } from 'components/SwitchTheme/SwitchTheme';
import { icons, socialLincks } from 'consts/consts';

import styles from './NavigationBar.module.css';

export const NavigationBar = () => {
  return (
    <div className={styles.navPanel}>
      <Container>
        <div className={styles.wrapp}>
          <MediaQuery minWidth={768}>
            <ul className={styles.linckList}>
              {icons.map(({ icon, alt }, i) => (
                <li key={alt} className={styles.item}>
                  <LinckItem
                    icon={icon}
                    alt={alt}
                    text={`Menu item ${i + 1}`}
                  />
                </li>
              ))}
            </ul>
          </MediaQuery>
          <SocialLinck lincks={socialLincks} main={true} />
          <SwitchTheme />
        </div>
      </Container>
    </div>
  );
};
