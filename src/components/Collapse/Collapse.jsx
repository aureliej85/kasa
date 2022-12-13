import React, { useState } from "react";
import "../Collapse/collapse.scss";

export default function Collapse({ title, contentText }) {
  const [isOpen, setIsOpen] = useState(true);

  function handleClick() {
    return isOpen ? setIsOpen(false) : setIsOpen(true);
  }

  console.log({ title });
  console.log({ contentText });

  return (
    <div className="collapse">
      <div className="collapse__bar">
        <div className="collapse__bar__title"> {title} </div>
        {isOpen ? (
          <img
            src="../arrow-up.png"
            className="collapse__bar__arrow"
            alt="Up arrow"
            onClick={handleClick}
          />
        ) : (
          <img
            src="../arrow-down.png"
            className="collapse__bar__arrow"
            alt="Down arrow"
            onClick={handleClick}
          />
        )}
      </div>
      {isOpen === true && (
        <div className="collapse__content"> {contentText} </div>
      )}
    </div>
  );
}
