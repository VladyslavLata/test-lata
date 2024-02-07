import { useState } from 'react';

import { useAppStore } from 'Store/Store';
import { buttons } from 'consts/consts';
import styles from './VotePanel.module.css';

export const VotePanel = ({ onYourVote, currentVote }) => {
  const [hoveredEl, sethoveredEl] = useState(0);
  const lightTheme = useAppStore(state => state.lightTheme);
  return (
    <ul className={styles.votePanel}>
      <li className={`${styles.voteNumber} ${styles.itemNote}`}>Note</li>
      {buttons.map(el => (
        <li
          key={el}
          className={`${styles.voteNumber} ${
            lightTheme ? styles.voteNumberLight : styles.voteNumberDark
          } ${currentVote >= el ? styles.voteNumberTransparent : ''} ${
            el <= hoveredEl ? styles.voteNumberTransparent : ''
          }`}
          onMouseLeave={() => {
            sethoveredEl(0);
          }}
          onMouseOver={() => {
            sethoveredEl(el);
          }}
          onClick={() => {
            console.log(el);
            onYourVote(el);
          }}
        >
          {el}
        </li>
      ))}
      `
    </ul>
  );
};
