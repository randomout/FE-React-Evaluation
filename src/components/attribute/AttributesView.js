import React from "react";
import { Attribute } from "./Attribute";

import './AttributesView.css';

/**
 * Display component for a list of Attribute cards.  Cards are arrayed horizontally,
 * wrapping in the containing area as needed.
 */
export function AttributesView({category, attributes}) {
  let attributeList = null;

  if(attributes) {
    attributeList = attributes.map((attribute, idx) => (
      <Attribute 
        key={attribute.id}
        category={category}
        idx={idx + 1}
        id={attribute.id}
        name={attribute.name}
        type={attribute.type}
      />
    ));
  }

  return (
    <div className="attributes-view">
      {attributeList}
    </div>
  )
}
