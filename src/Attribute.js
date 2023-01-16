import React from "react";

import './Attribute.css';

function Attribute({category, id, name, type}) {
  return(
    <div className="attribute">
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