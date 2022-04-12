
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
 const [email, setEmail] = useState('');
 const [password , setPassword] = useState('');


 const hendaleEmail = event => {
     const Email = event.target.value;
     setEmail(Email)

 }
 const hendalePassword = event => {
     const Password = event.target.value;
     setPassword(Password);

 }

 const handleFrom = (event) => {
    event.preventDefault();
 
  }

  
  

    return (
        <>
        <Form onSubmit={handleFrom} className='border mt-5 p-5 w-50 mx-auto pt-5'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onBlur={hendaleEmail} type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
    
          </Form.Text>
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onBlur={hendalePassword} type="password" placeholder="Password" />
        </Form.Group>
       
        <button className='btn btn-primary p-1 mb-2 ' type="">
          Submit
        </button>
      
     
        
        <p>
         <Link className='form-Link' to="/Sinup"> Create an account</Link>
     </p>
        
      </Form>
    
     </>
    );
};

export default Login;