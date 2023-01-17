import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadInterests, loadSkills } from '../../actions'
import { AttributesView } from "../attribute";

import './Home.css';

/**
 * Home page. Shows list of interests/skills for logged in user. 
 */
export function Home() {
  const user = useSelector((state) => state.user);
  const interests = useSelector((state) => state.user.interests);
  const skills = useSelector((state) => state.user.skills);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadInterests());
    dispatch(loadSkills());
  }, [dispatch]);
  
  return (
    <div className="home">
      <p className="welcome">Welcome {user.userName}</p>
      <p>
      Welcome to the Magic Portal!  Below is a list of your current Skills and Interests.
      </p>

      <AttributesView category="Interest" attributes={interests} />
      <AttributesView category="Skill" attributes={skills} />
    </div>
  )
}
