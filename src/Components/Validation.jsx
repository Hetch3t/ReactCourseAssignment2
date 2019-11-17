import React from "react";

const Validation = props => {
  let error = "";
  const style = {
    color: "red",
    fontWeight: "bold"
  };

  if (props.length === 0) {
    error = "";
  } else if (props.length < 5) {
    error = "Too short!";
  } else if (props.length > 10) {
    error = "Too long!";
  }

  return <span style={style}>{error}</span>;
};

export default Validation;
