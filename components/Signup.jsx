import React from 'react';
import './signup.css';

function Signup() {
  return (
    <div className='container'>
      <div className='box'></div>
      <div className='signup'>
        <h1>Sign Up</h1>
        <div className='form'>
          <p>Name</p>
          <input type='text' placeholder='Name'></input>
          <p>Email</p>
          <input type='text' placeholder='Email'></input>
          <p>Password</p>
          <input type='password' placeholder='Password'></input>
        </div>
        <button className='signup-button'>Sign Up</button>
      </div>
    </div>
  );
}

export default Signup;
