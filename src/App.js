import React from 'react';
import {
  Route,
  Switch,
} from 'react-router-dom';
import { 
  Login, 
  Layout, 
  ProtectedRoute, 
  Home, 
  Interest,
  Interests, 
  Skill, 
  Skills,
} from './components';

import './App.css';

function App() {
  return (
    <div className="app">
      <Switch>
        <Route path='/login' component={Login} />
        <ProtectedRoute path='/' >
          <Layout>
            <Route exact path="/" component={Home} />
            <Route path="/interests" component={Interests} />
            <Route path="/skills" component={Skills} />
            <Route path="/interest/:id" component={Interest} />
            <Route path="/skill/:id" component={Skill} />
          </Layout>
        </ProtectedRoute>
      </Switch>
    </div>
  );
}

export default App;
