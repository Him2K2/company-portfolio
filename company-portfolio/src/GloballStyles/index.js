import "./GloballStyles.scss";
import React from "react";

function GloballStyles({ children }) {
  return React.Children.only(children);
}

export default GloballStyles;
