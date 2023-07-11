import React from "react";
import Styles from "./About.module.css";
import Button from "../Button/Button";

const About = () => {
  return (
    <div className={Styles.app__about__section}>
      <div className={`${Styles.app__about} container`}>
        <div className={Styles.app__about__left}>
          <img
            src="https://preview.uideck.com/items/crypto/assets/img/about-img.svg"
            alt=""
          />
        </div>
        <div className={Styles.app__about__right}>
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            dianonumy eirmod tempor invidunt ut labore. Lorem ipsum dolor sit
            amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor
            invidunt ut labore. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed dianonumy eirmod tempor invidunt ut labore.
            <br />
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            dianonumy eirmod tempor invidunt ut labore. Lorem ipsum dolor sit
            amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor
            invidunt ut labore. Our
          </p>
          <Button
            color={
              "linear-gradient(to right,#365ae1 0%,#6286eb 50%,#365ae1 100%)"
            }
            name={"Learn More"}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
