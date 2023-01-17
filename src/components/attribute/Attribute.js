import React from "react";
import { useHistory, useLocation } from "react-router";

import './Attribute.css';

/**
 * Generic card-style component that dislays summary data for a particular user attribute (skill or interest)
 * 
 * 'category' indicates the type of attribute (e.g. "Skill" or "Interest")
 * 'idx' is the 1-based order index for the item if showing as part of a list
 * 'id' indicates the unique id of the item
 * 'name' is the name asssociated with the attribute (skill/interest)
 * 'type' is the type assigned to the skill/interest
 */
export function Attribute({category, idx, id, name, type}) {
  const history = useHistory();

  const selectAttribute = (e) => {
    e.preventDefault();
    history.push(`/${category.toLowerCase()}/${id}`);
  }

  return(
    <div className="attribute" onClick={selectAttribute}>
      <div className="attribute-contents">
        <p className="attribute-id">
          {category} {idx}
        </p>
        <div className="attribute-row">
          <div className="attribute-label">NAME:</div>
          <div>{name}</div>
        </div>
        <div className="attribute-row">
          <div className="attribute-label">TYPE:</div>
          <div className={`attribute-type attribute-type-${type}`}>{type}</div>
        </div>
      </div>
    </div>
  );
}