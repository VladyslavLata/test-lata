import styles from './LinckItem.module.css';

export const LinckItem = ({ icon: Icon, currenLinck, alt, text }) => {
  return (
    <>
      <a
        href="#"
        className={styles.linck}
        onClick={e => {
          e.currentTarget.blur();
        }}
      >
        {currenLinck !== 'socialLinck' && (
          <Icon width={'12px'} height={'14px'} alt={alt} fill="currentColor" />
        )}
        {currenLinck === 'socialLinck' && (
          <Icon alt={alt} fill="currentColor" />
        )}
        {text && <p className={styles.text}>{text}</p>}
      </a>
    </>
  );
};
