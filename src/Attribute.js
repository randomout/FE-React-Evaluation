import React from "react";
import { useHistory } from "react-router";

import './Attribute.css';

function Attribute({category, id, name, type}) {
  const history = useHistory();

  const selectAttribute = (e) => {
    e.preventDefault();
    history.push(`/${category.toLowerCase()}/${id}`);
  }

  return(
    <div className="attribute" onClick={selectAttribute}>
      <div className="attribute-contents">
        <p className="attribute-id">
          {category} {id}
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

export default Attribute