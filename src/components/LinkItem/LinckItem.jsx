import { useAppStore } from 'Store/Store';

import styles from './LinckItem.module.css';

export const LinckItem = ({ icon: Icon, currenLinck, alt, text, w, h }) => {
  const lightTheme = useAppStore(state => state.lightTheme);
  return (
    <>
      <a
        href="#"
        className={`${styles.linck} ${
          lightTheme ? styles.linkMobMenuLight : ''
        } ${currenLinck === 'inBaner' ? styles.banerLinck : ''}`}
        onClick={e => {
          e.currentTarget.blur();
        }}
      >
        {currenLinck !== 'socialLinck' && currenLinck !== 'inBaner' && (
          <Icon width={'12px'} height={'14px'} alt={alt} fill="currentColor" />
        )}
        {currenLinck === 'socialLinck' && (
          <Icon alt={alt} fill="currentColor" />
        )}
        {currenLinck === 'inBaner' && (
          <Icon alt={alt} fill="currentColor" width={w} height={h} />
        )}
        {text && (
          <p
            className={`${
              currenLinck === 'inBaner' ? styles.textLinkBaner : styles.text
            } `}
          >
            {text}
          </p>
        )}
      </a>
    </>
  );
};
