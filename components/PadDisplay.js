import React from "react";
import padsArr from "./padsArr";

export default function PadDisplay(props) {
  // returns the name of the active pad if state.activePad is not empty
  const activePadName =
    props.activePad === ""
      ? "------"
      : padsArr.filter((pad) => pad.id === props.activePad)[0].name;

  return (
    <div id="padDisplay">
      <h3 className="drum-header">Most Recent Pad</h3>
      <p id="padDisplayWindow">{activePadName}</p>
    </div>
  );
}
