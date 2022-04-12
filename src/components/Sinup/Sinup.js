import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import './Sinup.css'
import auth from '../../firebase.in';


const Sinup = () => {
    const [email, setEmail] = useState('');
    const [password , setPassword] = useState('');


   

    // sigupu with google 
const HendleGoogleSingup =() => {

    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {

      
        const user = result.user;
        console.log(user)
        // ...
      }).catch((error) => {
   
        console.log(error);
        
        // ...
      });
    }

   
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
        <Form onSubmit={handleFrom} className='border mt-5 p-5 w-50 mx-auto pt-5'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onBlur={hendaleEmail} type="email"  />
          <Form.Text className="text-muted">
    
          </Form.Text>
        </Form.Group>
      
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onBlur={hendalePassword} type="password"  />
          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control onBlur={hendalePassword} type="password"  />
          
        </Form.Group>
       
        <div className='mx-auto btn-box'>
            <button onClick={HendleGoogleSingup} className='mb-3 btn-google '>Continue with Google </button>
      
        </div>
        <p className='mb-2 from-link'>
            Already Have an account? <Link className='form-Link' to="/Login"> Login</Link>
         </p>
         <button className=' btn-google ' type="">
          Submit
        </button>
        
      </Form>
    );
};

export default Sinup;