import React from 'react'
import PropTypes from 'prop-types';
import {Jumbotron } from 'react-bootstrap';
import "./EntryStyle.css"
import { LoginForm } from '../../components/login/LoginComp';
import { useState } from 'react';
import { ResetPassword } from '../../components/password-reset/PasswordResetComp';
import { use } from 'react';



export const Entry = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [formLoad, setFormLoad] = useState('login')


  const handleOnChange = e =>{
    const {name, value} = e.target
    switch(name){
      case 'email':
        setEmail(value)
        break;
        
        case 'password':
        setPassword(value)
        break;

        default:
          break;
    }
  };

const handleOnSubmit = e =>{
  e.preventDefault()
  if(!email || !password){
    return alert("Fill up all the form!");
    //CALL API TO SUBMIT THE FORM
  }
  console.log(email,password);
};


const handleOnResetSubmit = e =>{
  e.preventDefault()
  if(!email){
    return alert("Please enter the email");
    //CALL API TO SUBMIT THE FORM
  }
  console.log(email,password);
};

const formSwitcher = frmtype => {
  setFormLoad(frmtype);
}

  return (
    <div className='entry-page bg-info'>
      <Jumbotron className='form-box'>
        {formLoad === 'login' && <LoginForm 
        handleOnChange={handleOnChange}
        handleOnSubmit={handleOnSubmit}
        formSwitcher = {formSwitcher}
        email={email} 
        pass = {password}
        />}
        {formLoad === 'reset' && <ResetPassword 
        handleOnChange={handleOnChange}
        handleOnResetSubmit={handleOnResetSubmit}
        formSwitcher = {formSwitcher}
        email={email} 
        />}
        
      </Jumbotron>
    </div>
  )
};

