import React from "react";
import { Link } from "react-router-dom";
import classes from "./SquareButtonLink.module.css";

function SquareButtonLink({ link, label, ...props }) {
  return (
    <Link className={classes.SquareButton} to={link}>
      <p className={classes.label}>{label}</p>
    </Link>
  );
}

export default SquareButtonLink;
