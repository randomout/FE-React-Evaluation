import React from "react";

function Layout() {
  return (
    <div className="Layout">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Interests</Link>
          </li>
          <li>
            <Link to="/">Skills</Link>
          </li>
          <li>
            Username goes here...
          </li>
        </ul>
      </nav>

    </div>
  )
}

export default Layout;