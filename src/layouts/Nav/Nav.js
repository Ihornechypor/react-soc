import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={`app-nav ${classes.nav__box}`}>
      <ul className={classes.nav__box}>
        <li className={classes.nav__item}>
          <NavLink to="/profile" activeClassName={classes.nav__item}>
            Profile
          </NavLink>
        </li>
        <li className={classes.nav__item}>
          <NavLink to="/users" activeClassName={classes.nav__item}>
            Users
          </NavLink>
        </li>
        <li className={classes.nav__item}>
          <NavLink to="/messages" activeClassName={classes.nav__item}>
            Messages
          </NavLink>
        </li>
        <li className={classes.nav__item}>
          <NavLink
            to="/news
          
          "
            activeClassName={classes.nav__item}
          >
            News
          </NavLink>
        </li>
        <li className={classes.nav__item}>
          <NavLink to="/music" activeClassName={classes.nav__item}>
            Music
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
