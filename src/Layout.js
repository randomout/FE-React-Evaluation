import React from "react";
import { Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Home from './Home';
import Interests from './Interests';
import Skills from './Skills';

function Layout() {
  const user = useSelector((state) => state.user);

  return (
    <div className="Layout">
       <nav>
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
            <li>
              {user.userName}
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