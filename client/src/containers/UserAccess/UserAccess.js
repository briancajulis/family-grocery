import React, { useState } from 'react';

import styles from './UserAccess.module.scss';

import Login from '../../components/User/Login/Login';
import Register from '../../components/User/Register/Register';

const UserAccess = () => {
  const [isRegister, setRegister] = useState(false);

  let userForm = !isRegister ? <Login /> : <Register />;

  let switchFormText = (
    <p style={{ color: 'white', marginTop: '5%' }}>
      Don't have an account?{' '}
      <span
        style={{ textDecoration: 'underline', cursor: 'pointer' }}
        onClick={() => setRegister(!isRegister)}
      >
        Register Here!
      </span>
    </p>
  );

  if (isRegister) {
    switchFormText = (
      <p style={{ color: 'white', marginTop: '5%' }}>
        Already have an account?{' '}
        <span
          style={{ textDecoration: 'underline', cursor: 'pointer' }}
          onClick={() => setRegister(!isRegister)}
        >
          Login Here!
        </span>
      </p>
    );
  }

  return (
    <div className={styles.Container}>
      <div className={styles.Middle}>
        <h1>Logo Placeholder</h1>
        <div className={styles.FormContainer}>{userForm}</div>
        {switchFormText}
      </div>
    </div>
  );
};

export default UserAccess;
