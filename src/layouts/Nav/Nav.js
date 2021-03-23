import React from "react";
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={`app-nav ${classes.nav__box}`}>
      <ul className={classes.nav__box}>
        <li className={`${classes.nav__item} ${classes.nav__item_active}`}>
          <a href="#">Profile</a>
        </li>
        <li className={classes.nav__item}>
          <a href="#">Messages</a>
        </li>
        <li className={classes.nav__item}>
          <a href="#">News</a>
        </li>
        <li className={classes.nav__item}>
          <a href="#">Music</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
