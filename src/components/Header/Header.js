import React, { useEffect } from "react";
import classes from "./Header.module.css";
import { useLocation, Link } from "react-router-dom";

function Header({ title }) {
  let location = useLocation();

  useEffect(() => {
    console.log(location);
  }, [location]);

  return (
    <div className={classes.Header}>
      {location.pathname !== "/" && <Link to="/" className={classes.GoBack}>Go back</Link>}
      <p className={classes.Header__Title}>{title}</p>
    </div>
  );
}

export default Header;
