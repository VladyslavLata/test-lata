import { useState } from 'react';

import { useAppStore } from 'Store/Store';
import { BtnIcon } from 'components/BtnIcon/BtnIcon';
import { ReactComponent as SearchIcon } from '../../img/search.svg';

import styles from './SearchInput.module.css';

export const SearchInput = () => {
  const [value, setValue] = useState('');
  const lightTheme = useAppStore(state => state.lightTheme);

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    setValue('');
  };

  return (
    <div className={styles.wrapp}>
      <input
        className={`${styles.input} ${lightTheme ? styles.light : styles.dark}`}
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Searc for..."
      />
      <BtnIcon
        w={'19px'}
        h={'19px'}
        svg={SearchIcon}
        name={'search button'}
        onClick={handleSubmit}
        styleName={'btnSearch'}
      />
    </div>
  );
};
