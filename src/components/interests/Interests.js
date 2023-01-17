import React from "react";
import { useSelector } from "react-redux";
import { AttributesView } from "../attribute";

import './Interests.css';

/**
 * Interests page. Shows list of all interests for logged in user. 
 */
export function Interests() {
  const user = useSelector((state) => state.user);
  const interests = useSelector((state) => state.user.interests);
  
  return (
    <div className="interests">
      <p className="title">Interests for {user.userName}</p>
      <p>
        Below is a list of your current Interests.
      </p>

      <AttributesView category="Interest" attributes={interests} />
    </div>
  )
}
