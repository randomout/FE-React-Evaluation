import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { login } from "./actions";

import './Login.css';

function Login() {
  const [data, setData] = useState({
    username: '',
    password: '',
  });

  const dispatch = useDispatch();
  const history = useHistory();
  
  const submitHandler = (e) => {
    e.preventDefault();

    dispatch(login(data, history));
  };

  const changeHandler = (e) => {
    setData({
      ...data,
      [e.target.name]:e.target.value,
    });
  }

  return (
    <div className="Login">
      <div className="Login-logo">
        <img src="logo.png" />
      </div>
      <form className="Login-form" onSubmit={submitHandler}>
        <span>Login to Our Magic Portal</span>
        <input type="text" name="username" value={data.username} onChange={changeHandler} placeholder="Username" required/>
        <input type="password" name="password" value={data.password} onChange={changeHandler} placeholder="Password" required/>
        <button type="submit">Login</button>
      </form>
      
    </div>
  )
}

export default Login;