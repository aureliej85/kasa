import React from "react";
import "../Tag/tag.scss";

export default function Tag({ tags }) {
  let tagsTab = tags.map((elt, index) => (
    <span key={index} className="tag">
      {elt}
    </span>
  ));

  return <div>{tagsTab}</div>;
}
