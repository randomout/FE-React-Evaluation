import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadInterests, loadSkills } from './actions'

function Home() {
  const user = useSelector((state) => state.user);
  const interests = useSelector((state) => state.user.interests);
  const skills = useSelector((state) => state.user.skills);

  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(loadInterests());
    dispatch(loadSkills());
  }, [dispatch]);
  
  return (
    <div className="Home">
      Welcome {user.userName}
    </div>
  )
}

export default Home;