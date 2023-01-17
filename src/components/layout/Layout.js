import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";


import './Layout.css';

/**
 * Default layout for all pages (except login)
 */
export function Layout({children}) {
  const user = useSelector((state) => state.user);
  const location = useLocation();

  /**
   * Note: 'selected' status is used for indicating which section is currently selected in the nav bar, 
   * but doesn't work well when navigating to specific skill/interest - didn't want to 
   * go too far down that rabbit hole...
   */
  return (
    <div className="Layout">
       <nav className="navbar">
          <img className="logo" src="logo.png" alt="logo"/>
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

        {children}
    </div>
  )
}
