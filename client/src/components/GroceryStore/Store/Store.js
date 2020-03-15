import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

import styles from './Store.module.scss';

const Store = () => {
  return (
    <div className={styles.Container}>
      <div>
        <FontAwesomeIcon
          className={`${styles.Icon} ${styles.Trash}`}
          icon={faTrash}
        />
      </div>

      <h3>Store Name</h3>
    </div>
  );
};

export default Store;
