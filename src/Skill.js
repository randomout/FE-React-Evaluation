import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import moment from "moment";

import './Skill.css';

function Skill() {
  const { id } = useParams();
  const skills = useSelector((state) => state.user.skills);

  const skill = skills.find(skill => skill.id === parseInt(id));

  return (
    <div className="skill">
      <p className="skill-name">{skill.name}</p>
      <p className={`skill-type skill-type-${skill.type}`}>{skill.type}</p>
      <div className="skill-date">
        <label>
          Learned:
        </label>
        <div>
          {moment(skill.DateLearned).format('MM/DD/YYYY')}
        </div>
      </div>
      <p className="skill-detail">{skill.detail}</p>
    </div>
  )
}

export default Skill;