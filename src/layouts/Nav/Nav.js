import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={`app-nav ${classes.nav__box}`}>
      <ul className={classes.nav__box}>
        <li className={classes.nav__item}>
          <NavLink to="/profile" activeClassName={classes.nav__item_active}>
            Profile
          </NavLink>
        </li>
        <li className={classes.nav__item}>
          <NavLink to="/messages" activeClassName={classes.nav__item_active}>
            Messages
          </NavLink>
        </li>
        <li className={classes.nav__item}>
          <NavLink
            to="/news
          
          "
            activeClassName={classes.nav__item_active}
          >
            News
          </NavLink>
        </li>
        <li className={classes.nav__item}>
          <NavLink to="/music" activeClassName={classes.nav__item_active}>
            Music
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
