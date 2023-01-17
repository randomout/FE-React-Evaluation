import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

import './Interest.css';

/**
 * Interest page component that shows details for a single interest for the logged-in user
 */
export function Interest() {
  const { id } = useParams();
  const interests = useSelector((state) => state.user.interests);

  const interest = interests.find(interest => interest.id === parseInt(id));

  return (
    <div className="interest">
      <p className="interest-name">{interest.name}</p>
      <p className={`interest-type interest-type-${interest.type}`}>{interest.type}</p>
      <p className="interest-detail">{interest.detail}</p>
    </div>
  )
}
