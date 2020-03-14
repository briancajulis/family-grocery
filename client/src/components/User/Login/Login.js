import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import styles from './Login.module.scss';

const Login = () => {
  return (
    <>
      <Form>
        <Form.Group>
          <Form.Label>Email Address</Form.Label>
          <Form.Control type='email' placeholder='Enter Email' />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type='password' placeholder='Enter Password' />
        </Form.Group>

        <div className={styles.Button}>
          <Button>Login</Button>
        </div>
      </Form>
    </>
  );
};

export default Login;
