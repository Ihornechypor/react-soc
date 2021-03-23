import React from "react";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={`app-header ${classes.header__box}`}>
      <img
        src="https://www.flaticon.com/svg/vstatic/svg/762/762386.svg?token=exp=1616505007~hmac=9d0abfedb08671dcfe4e4f8c7c9d5b4e"
        alt=""
        className={classes.header__logo}
      />
    </header>
  );
};

export default Header;
