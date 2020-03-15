import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import styles from './GroceryStore.module.scss';

import StoreList from '../../components/GroceryStore/StoreList/StoreList';

const GroceryStore = () => {
  return (
    <div className={styles.Container}>
      <h1>Grocery Store Page</h1>
      <Button className={styles.Button}>
        <FontAwesomeIcon className='icon' icon={faPlus} />
        Create Store
      </Button>
      <StoreList />
    </div>
  );
};

export default GroceryStore;
