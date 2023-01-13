import React from "react";
import { Route, Link } from "react-router-dom";
import Home from './Home';
import Interests from './Interests';
import Skills from './Skills';

function Layout() {
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
              Username goes here...
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