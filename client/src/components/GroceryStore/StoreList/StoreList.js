import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import styles from './StoreList.module.scss';

import Store from '../Store/Store';

const StoreList = () => {
  return (
    <div className={styles.Container}>
      <Store />
    </div>
  );
};

export default StoreList;
