import React from 'react';
import styles from './App.module.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

import UserAccess from './containers/UserAccess/UserAccess';
import GroceryStore from './containers/GroceryStore/GroceryStore';

function App() {
  return (
    <div className={styles.AppContainer}>
      <GroceryStore />
    </div>
  );
}

export default App;
