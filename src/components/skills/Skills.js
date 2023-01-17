import React from "react";
import { useSelector } from "react-redux";
import { AttributesView } from "../attribute";

import './Skills.css';

/**
 * Skills page. Shows list of all skills for logged in user. 
 */
export function Skills() {
  const user = useSelector((state) => state.user);
  const skills = useSelector((state) => state.user.skills);

  return (
    <div className="skills">
      <p className="title">Skills for {user.userName}</p>
      <p>
        Below is a list of your current Skills.
      </p>

      <AttributesView category="Skill" attributes={skills} />
    </div>
  )
}
