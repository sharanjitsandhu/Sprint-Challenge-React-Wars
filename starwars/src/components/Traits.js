import React from "react";

function Traits(props) {
  console.log(props);
  return <div>{props.traits.name}</div>;
}
export default Traits;
