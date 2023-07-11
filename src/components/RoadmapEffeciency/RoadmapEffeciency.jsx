import React from "react";
import Style from "./RoadmapEffeciency.module.css";
import Button from "../Button/Button";

const RoadmapEffenciency = () => {
  return (
    <div className={Style.app__roadmapeffeciency__section}>
      <div className={`${Style.app__roadmapeffeciency} container`}>
        <div className={Style.app__roadmapeffeciency__left}>
          <img
            src="https://preview.uideck.com/items/crypto/assets/img/xgrows-img.png.pagespeed.ic.2aGtqFCa9B.webp"
            alt=""
          />
        </div>
        <div className={Style.app__roadmapeffeciency__right}>
          <h4 className={Style.app__roadmapeffeciency__right__header}>
            Great Effeciency Like Never Before
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            dianonumy eirmod tempor invidunt ut labore. Lorem ipsum dolor sit
            amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor
            invidunt ut labore.
            <br />
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            dianonumy eirmod tempor invidunt ut labore. Lorem ipsum dolor sit
            amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor
            invidunt ut labore.
          </p>
          <Button
            color="linear-gradient(to right,#365ae1 0%,#6286eb 50%,#365ae1 100%)"
            name="Download History"
          />
        </div>
      </div>
    </div>
  );
};

export default RoadmapEffenciency;
