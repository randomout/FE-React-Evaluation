import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Layout from "./Layout";
import ProtectedRoute from "./ProtectedRoute";
import {
    Route,
    Switch,
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/login' component={Login} />
        <ProtectedRoute path='/' component={Layout} />
      </Switch>
    </div>
  );
}

export default App;
