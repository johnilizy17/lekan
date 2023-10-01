import PropTypes from "prop-types";
import React from "react";
import { GridCircle4 } from "../../icons/GridCircle4";
import "./style.css";

export const Button = ({
  property1,
  icon = <GridCircle4 className="grid-circle" color="#4F4F4F" />,
  text = "Dashboard",
}) => {
  return (
    <button className={`button ${property1}`}>
      {icon}
      <div className="dashboard">{text}</div>
    </button>
  );
};

Button.propTypes = {
  property1: PropTypes.oneOf(["active", "default"]),
  text: PropTypes.string,
};
