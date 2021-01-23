import React from "react";
import Pad from "./Pad";
import padsArr from "./padsArr";

export default function PadWrap(props) {
  const pads = padsArr.map((item) => (
    <Pad
      item={item}
      key={item.id}
      id={item.id}
      letter={item.letter}
      name={item.name}
      handlePad={props.handlePad}
    />
  ));

  return <div id="padWrap">{pads}</div>;
}
