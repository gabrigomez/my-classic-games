import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';

import './Login.css'
import { login } from "../actions/auth";

import { Formik } from "formik";
import * as Yup from "yup";

export const Login = (props) => {
  let navigate = useNavigate();

  const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);

  const dispatch = useDispatch();

  if (isLoggedIn) {
    return <Navigate to="/" />
  } 

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required("Email is required"),
    password: Yup.string()
      .required("Passwort is required")
      .min(6, "Password too short! Must be at least 6 characters."),
  });

  const handleSubmit = (
    { username, password },
    { setFieldError }
  ) => {    
    if(!message) {
      dispatch(login(username, password))
          .then(() => {
            navigate("/");
            console.log(localStorage.getItem('user'));
          }) 
      setTimeout(() => {
        setFieldError("email", "This email is already taken");
      }, 1000);
    } else {
      console.log(message)
    }
  };

  return (
    <div className='login-form-container'>
      <Formik
        initialValues={{
          username: "",
          password: "",          
        }}
        onSubmit={(values, errors) => {
          handleSubmit(values, errors);
        }}
        validationSchema={validationSchema}
      >
        {({
            values,
            errors,
            touched,
            handleSubmit,
            handleChange,
            handleBlur,
          }) => {
          return (
            <form className='login-form' onSubmit={handleSubmit}>        
              <h1>
                Login
              </h1>
              <div className='email'>
                <input 
                  type="text" 
                  name='username' 
                  placeholder='Username'
                  value={values.username}
                  onChange={handleChange("username")}
                  onBlur={handleBlur("username")}                  
                />
                <div>{touched.username && errors.username}</div>
              </div>
              <div className='password'>
                <input 
                  type="password" 
                  name='password' 
                  placeholder='Password'
                  value={values.password}
                  onChange={handleChange("password")}
                  onBlur={handleBlur("password")}                  
                />
                <div>{touched.password && errors.password}</div>
              </div>        
              <button className='login-button' type='submit'> 
                Login
              </button>
            </form>
          )}
        }        
      </Formik>
    </div>
  )
}