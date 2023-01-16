import React from "react";
import { Route, Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

import Home from './Home';
import Interests from './Interests';
import Skills from './Skills';

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
            <li className={location.pathname === '/interests' ? 'selected' : ''}>
              <Link to="/interests">Interests</Link>
            </li>
            <li className={location.pathname === '/skills' ? 'selected' : ''}>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <FontAwesomeIcon icon={faUser} />
              <span className="username">{user.userName}</span>
            </li>
          </ul>
        </nav>

        <Route exact path="/" component={Home} />
        <Route path="/interests" component={Interests} />
        <Route path="/skills" component={Skills} />
    </div>
  )
}

export default Layout;