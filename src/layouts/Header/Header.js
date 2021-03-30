import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={`app-header ${classes.header__box}`}>
      <img
        src="https://www.flaticon.com/svg/vstatic/svg/731/731985.svg?token=exp=1616670803~hmac=b77982a2477ce1ae862af54df80af4c0"
        alt=""
        className={classes.header__logo}
      />
    </header>
  );
};

export default Header;
