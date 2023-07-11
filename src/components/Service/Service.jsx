import React from "react";
import Styles from "./Service.module.css";

const Service = () => {
  const services = [
    {
      id: 1,
      name: "Secure Wallet",
      description:
        "Lorem ipsum dolor sit aconsetetur sadipscing elitr, sed dianonumy invidunt ut labore .",
      icon: "lni lni-money-protection",
    },
    {
      id: 2,
      name: "Fast Notifications",
      description:
        "Lorem ipsum dolor sit aconsetetur sadipscing elitr, sed dianonumy invidunt ut labore .",
      icon: "lni lni-alarm",
    },
    {
      id: 3,
      name: "Exchange Service",
      description:
        "Lorem ipsum dolor sit aconsetetur sadipscing elitr, sed dianonumy invidunt ut labore .",
      icon: "lni lni-reload",
    },
    {
      id: 4,
      name: "Complete Solution",
      description:
        "Lorem ipsum dolor sit aconsetetur sadipscing elitr, sed dianonumy invidunt ut labore .",
      icon: "lni lni-cog",
    },
    {
      id: 5,
      name: "Trading Platform",
      description:
        "Lorem ipsum dolor sit aconsetetur sadipscing elitr, sed dianonumy invidunt ut labore .",
      icon: "lni lni-bolt-alt",
    },
    {
      id: 6,
      name: "Investment",
      description:
        "Lorem ipsum dolor sit aconsetetur sadipscing elitr, sed dianonumy invidunt ut labore .",
      icon: "lni lni-coin",
    },
  ];

  return (
    <div className={Styles.app__service__section}>
      <div className={`${Styles.app__service} container`}>
        <div className={Styles.app__service__top}>
          <h2>Our Awesome Features</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            dianonumy eirmod tempor invidunt ut labore .
          </p>
        </div>
        <div className={Styles.app__service__bottom}>
          {services.map((service) => {
            return (
              <div
                key={service.id}
                className={Styles.app__service__bottom__item}
              >
                <div className={Styles.app__service__bottom__item__icon}>
                  {/* <i
                    className={`${service.icon} ${Styles.app__service__bottom__item__icon}`}
                  ></i> 
                  */}
                  <i className={service.icon}></i>
                </div>
                <h2>{service.name}</h2>
                <p>{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Service;
