import React, { useState } from "react";

export default function Selection({ applyColor }) {
  const [selectionStyle, updateSelectionStyle] = useState({});
  function handleClick(e) {
    e.preventDefault();
    applyColor(updateSelectionStyle);
  }
  return (
    <div  className="fix-box" style={{ ...selectionStyle }} onClick={handleClick}>
      <p>Selection</p>
    </div>
  );
}
