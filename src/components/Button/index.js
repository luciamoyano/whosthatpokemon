import React from "react";
import "./style.scss";
import "../../../node_modules/nes.css/css/nes.css";

function Button(props) {
  const { difficulty } = props;
  return <button className="nes-btn main-btn">{difficulty}</button>;
}

export default Button;
