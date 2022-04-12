import { Button } from 'bootstrap';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const Login = () => {
 const [email, setEmail] = useState('');
 const [password , setPassword] = useState('');

 const hendaleEmail = () => {

 }
 const hendalePassword = () => {

 }

 const handleSubmitFrom = () => {
     
 }
  
  

    return (
        <Form className='border mt-5 p-5 w-50 mx-auto pt-5'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
    
          </Form.Text>
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <button className='btn btn-primary p-1' type="">
          Submit
        </button>
        
      </Form>
    );
};

export default Login;