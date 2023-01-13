import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Layout from "./Layout";
import {
    Route,
    Switch,
} from 'react-router-dom';
import {fakeInterests, fakeSkills} from "./dummy-data";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/' component={Layout} />
      </Switch>
    </div>
  );
}

export default App;
