import React from "react";
import { Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Home from './Home';
import Interests from './Interests';
import Skills from './Skills';

import './Layout.css';

function Layout() {
  const user = useSelector((state) => state.user);

  return (
    <div className="Layout">
       <nav className="navbar">
          <img className="logo" src="logo.png" />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/interests">Interests</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li className="user">
              <FontAwesomeIcon icon="fa-solid fa-user" />   
              <span>{user.userName}</span>
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