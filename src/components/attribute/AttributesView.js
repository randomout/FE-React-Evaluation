import React from "react";
import { Attribute } from "./Attribute";

import './AttributesView.css';

export function AttributesView({category, attributes}) {
  let attributeList = null;

  if(attributes) {
    attributeList = attributes.map((attribute) => (
      <Attribute 
        category={category}
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
