import React from "react";
import Style from "./Button.module.css";

const Button = (props) => {
  const btnStyle = {
    background: props.color,
  };

  return (
    <button className={`${Style.button}`} style={btnStyle}>
      {props.name}
    </button>
  );
};

export default Button;
