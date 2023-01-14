import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";

import { login } from "./actions";

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
      <form onSubmit={submitHandler}>
        <label htmlFor="username" >Username</label>
        <input type="text" name="username" value={data.username} onChange={changeHandler}/>

        <label htmlFor="password">Password</label>
        <input type="password" name="password" value={data.password} onChange={changeHandler}/>

        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login;