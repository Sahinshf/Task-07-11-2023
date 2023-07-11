import React from "react";
import Styles from "./Header.module.css";
import Logo from "../../../components/Logo/Logo";

const Header = () => {
  return (
    <div className={`${Styles.app__header__section} `}>
      <div className={`${Styles.app__header} container`}>
        <Logo />
        <div className={Styles.app__header__right}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Roadmap</li>
            <li>Team</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
