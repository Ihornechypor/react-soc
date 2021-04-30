import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={`app-header ${classes.header__box}`}>
      <img src="" alt="" className={classes.header__logo} />
      {!props.isAuth ? (
        <div className={classes.login__box}>
          <NavLink to="/login">login</NavLink>
        </div>
      ) : (
        <p>{props.uLogin}</p>
      )}
    </header>
  );
};

export default Header;
