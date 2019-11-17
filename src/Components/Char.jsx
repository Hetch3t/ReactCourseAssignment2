import React from "react";

const Char = props => {
  const style = {
    display: "inline-block"
  };
  return (
    <div style={style}>
      <p>{props.data}</p>
      <button onClick={props.delete}>-</button>
    </div>
  );
};

export default Char;
