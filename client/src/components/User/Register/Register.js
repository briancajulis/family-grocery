import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import styles from './Register.module.scss';

const Register = () => {
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

        <Form.Group>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type='password' placeholder='Enter Password Again' />
        </Form.Group>

        <div className={styles.Button}>
          <Button>Register</Button>
        </div>
      </Form>
    </>
  );
};

export default Register;
