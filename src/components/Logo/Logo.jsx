import React from "react";
import Style from "./Logo.module.css";

const Logo = () => {
  return (
    <div className={Style.logo}>
      <img
        src="https://preview.uideck.com/items/crypto/assets/img/logo.svg"
        alt=""
      />
    </div>
  );
};

export default Logo;
