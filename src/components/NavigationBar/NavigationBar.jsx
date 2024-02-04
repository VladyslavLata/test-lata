import { LinckItem } from 'components/LinkItem/LinckItem';
import { SocialLinck } from 'components/SocialLinck/SocialLinck';
import { Container } from 'components/Container/Container';
import { SwitchTheme } from 'components/SwitchTheme/SwitchTheme';

import { ReactComponent as Phone } from '../../img/phone.svg';
import { ReactComponent as Apple } from '../../img/apple.svg';
import { ReactComponent as Icon } from '../../img/icon.svg';
import { ReactComponent as Android } from '../../img/android.svg';
import { ReactComponent as Fb } from '../../img/fb.svg';
import { ReactComponent as Tw } from '../../img/tw.svg';
import { ReactComponent as Inst } from '../../img/inst.svg';
import { ReactComponent as Yt } from '../../img/yt.svg';
import { ReactComponent as G } from '../../img/g.svg';
import { ReactComponent as Signal } from '../../img/signal.svg';

import styles from './NavigationBar.module.css';

const icons = [
  { icon: Phone, alt: 'phone icon' },
  { icon: Icon, alt: 'icon' },
  { icon: Android, alt: 'android icon' },
  { icon: Apple, alt: 'apple icon' },
];

const socialLincks = [
  {
    icon: Fb,
    alt: 'facebook icon',
    path: 'https://www.facebook.com/',
    w: '8px',
    h: '15px',
  },
  {
    icon: Tw,
    alt: 'twitter icon',
    path: 'https://twitter.com/',
    w: '14px',
    h: '11px',
  },
  {
    icon: Inst,
    alt: 'instagram icon',
    path: 'https://www.instagram.com/',
    w: '14px',
    h: '14px',
  },
  {
    icon: Yt,
    alt: 'youtube icon',
    path: 'https://www.youtube.com/',
    w: '17px',
    h: '12px',
  },
  {
    icon: G,
    alt: 'G icon',
    path: 'https://www.google.com/',
    w: '21px',
    h: '17px',
  },
  {
    icon: Signal,
    alt: 'signal icon',
    path: 'https://www.google.com/',
    w: '14px',
    h: '14px',
  },
];

export const NavigationBar = () => {
  return (
    <div className={styles.navPanel}>
      <Container>
        <div className={styles.wrapp}>
          <ul className={styles.linckList}>
            {icons.map(({ icon, alt }, i) => (
              <li key={alt} className={styles.item}>
                <LinckItem icon={icon} alt={alt} text={`Menu item ${i + 1}`} />
              </li>
            ))}
          </ul>
          <SocialLinck lincks={socialLincks} main={true} />
          <SwitchTheme />
        </div>
      </Container>
    </div>
  );
};
