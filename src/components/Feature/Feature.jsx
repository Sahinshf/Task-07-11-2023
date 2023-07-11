import React from "react";
import Style from "./Feature.module.css";

const Feature = () => {
  const specialities = [
    {
      id: 1,
      img: "https://preview.uideck.com/items/crypto/assets/img/feature-1.svg",
      name: "Buy Your Crypto",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt ut labore .",
    },
    {
      id: 2,
      img: "https://preview.uideck.com/items/crypto/assets/img/feature-2.svg",
      name: "Sell Instantly",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt ut labore . ",
    },
    {
      id: 3,
      img: "https://preview.uideck.com/items/crypto/assets/img/feature-3.svg",
      name: "Invest for Longterm",
      description:
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed dianonumy eirmod tempor invidunt ut labore .",
    },
  ];

  return (
    <div className={`${Style.app__home__feature__section}`}>
      <div className={`${Style.app__home__feature} container`}>
        <div className={Style.app__home__feature__top}>
          <h1>Our Specialities</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            dianonumy eirmod tempor invidunt ut labore .
          </p>
        </div>
        <div className={Style.app__home__feature__bottom}>
          {specialities.map((speciality) => {
            return (
              <div
                key={speciality.id}
                className={Style.app__home__feature__bottom__speciality}
              >
                <img src={`${speciality.img}`} alt="" />
                <h2>{speciality.name}</h2>
                <p>{speciality.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Feature;
