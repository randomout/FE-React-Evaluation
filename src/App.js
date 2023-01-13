import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
    Route,
    Switch
} from 'react-router-dom';
import {fakeInterests, fakeSkills} from "./dummy-data";

function App() {
  return (
    <div className="App">
      <p>This is App.js</p>
        <Switch>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/interests' element={<Interests />} />
            <Route path='/skills' element={<Skills />} />
          </Route>

          <Route path='/login' element={<Login />} />
          </Switch>
    </div>
  );
}

export default App;
