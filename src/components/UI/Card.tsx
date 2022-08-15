import React from "react";
import "./Card.css";

const Card: React.FC<{ className: string }> = ({ className, children }) => {
  const classes = `card ${className}`;
  return <div className={classes}>{children}</div>;
};

export default Card;
