import React from 'react';
import './App.css';
import { Login, Layout, ProtectedRoute } from './components';

import {
    Route,
    Switch,
} from 'react-router-dom';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path='/login' component={Login} />
        <ProtectedRoute path='/' component={Layout} />
      </Switch>
    </div>
  );
}

export default App;
