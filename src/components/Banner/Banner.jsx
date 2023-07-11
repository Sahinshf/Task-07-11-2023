import React from "react";
import Styles from "./Banner.module.css";
import Button from "../Button/Button";

const Banner = () => {
  return (
    <div className={`${Styles.app__home__section} `}>
      <div className={`${Styles.app__home} container`}>
        <div className={`${Styles.app__home__banner}`}>
          <div className={`${Styles.app__home__banner__left} `}>
            <h1>Trade and Invest on Crypto Using Our Platform</h1>
            <p>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              dianonumy eirmod tempor invidunt ut labore .
            </p>
            <Button
              color={
                "linear-gradient(to right,#34b15e 0%,#73e09a 50%,#34b15e 100%)"
              }
              name={"Register Now"}
            />
          </div>
          <div className={`${Styles.app__home__banner__right}`}>
            <img
              src="https://preview.uideck.com/items/crypto/assets/img/hero-img.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
