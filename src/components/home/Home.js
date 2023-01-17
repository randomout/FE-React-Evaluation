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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod 
      bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra 
      justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque penatibus 
      et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla 
      luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus pronin sapien 
      nunc accuan eget.
      </p>

      <AttributesView category="Interest" attributes={interests} />
      <AttributesView category="Skill" attributes={skills} />
    </div>
  )
}
