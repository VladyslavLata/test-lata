import { useState } from 'react';
import MediaQuery from 'react-responsive';

import { useAppStore } from 'Store/Store';
import { Btn } from 'components/Btn/Btn';
import { LinckItem } from 'components/LinkItem/LinckItem';

import { ReactComponent as Menu } from '../../img/menu-dropdown.svg';
import { iconsBaner, dropdownLinks } from 'consts/consts';
import avatar from '../../img/avatar.webp';
import styles from './Banner.module.css';

export const Banner = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const lightTheme = useAppStore(state => state.lightTheme);

  const toggleDropdavnVisible = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div
      className={`${styles.banner} ${
        lightTheme ? styles.lightBanner : styles.darkBanner
      }`}
    >
      <div className={styles.poster}>
        <div className={styles.posterContentWrapp}>
          <div className={styles.imgWrapp}>
            <img
              src={avatar}
              alt={'game hero avatar'}
              className={styles.avatar}
            />
          </div>
          <div>
            <h2 className={styles.title}>Lorem Ipsum is simply dummy</h2>
            <MediaQuery minWidth={1230}>
              <ul className={styles.btnLinkList}>
                {iconsBaner.map(({ icon, alt, text, h, w }) => (
                  <li className={styles.linkItem} key={alt}>
                    <LinckItem
                      icon={icon}
                      alt={alt}
                      text={text}
                      w={w}
                      h={h}
                      currenLinck={'inBaner'}
                    />
                  </li>
                ))}
              </ul>
            </MediaQuery>
          </div>
        </div>
      </div>
      <div className={styles.bannerfooter}>
        <ul
          className={`${styles.bannerfooterList}
          `}
        >
          {dropdownLinks.map(({ link, path }, i) => (
            <li key={`${i} ${link}`} className={styles.dropdownItem}>
              <a href={path}>{link}</a>
            </li>
          ))}
        </ul>
        <MediaQuery maxWidth={1229}>
          <Btn
            name={'show or hidden dropdown'}
            svg={Menu}
            onClick={toggleDropdavnVisible}
            text={'More info'}
          />

          {dropdownVisible && (
            <ul
              className={`${styles.dropdown} ${
                lightTheme ? styles.dropdownLight : styles.dropdownDark
              }`}
            >
              {dropdownLinks.map(({ link, path }, i) => (
                <li key={`${i} ${link}`} className={styles.dropdownItem}>
                  <a href={path} onClick={toggleDropdavnVisible}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </MediaQuery>
      </div>
    </div>
  );
};
