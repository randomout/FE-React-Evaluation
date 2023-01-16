import React from "react";
import { Route, Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import Home from './Home';
import Interest from './Interest';
import Skill from './Skill';
import Dummy from './Dummy';


import './Layout.css';

function Layout() {
  const user = useSelector((state) => state.user);
  const location = useLocation();

  return (
    <div className="Layout">
       <nav className="navbar">
          <img className="logo" src="logo.png" />
          <ul>
            <li className={location.pathname === '/' ? 'selected' : ''}>
              <Link to="/">Home</Link>
            </li>
            <li className={location.pathname === '/nav2' ? 'selected' : ''}>
              <Link to="/nav2">Navigation 2</Link>
            </li>
            <li className={location.pathname === '/nav3' ? 'selected' : ''}>
              <Link to="/nav3">Navigation 3</Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faUser} />
              <span className="username">{user.userName}</span>
            </li>
          </ul>
        </nav>

        <Route exact path="/" component={Home} />
        <Route path="/interest/:id" component={Interest} />
        <Route path="/skill/:id" component={Skill} />
        <Route path="/nav2" component={Dummy} />
        <Route path="/nav3" component={Dummy} />
    </div>
  )
}

export default Layout;