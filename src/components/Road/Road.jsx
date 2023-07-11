import React from "react";
import Style from "./Road.module.css";

const Road = () => {
  const roadmap = [
    {
      id: 1,
      name: "Exchange Bitcontent to Bitcoin",
      date: "January 2023",
    },
    {
      id: 2,
      name: "BTCC mode of payment in Bitconcent",
      date: "February 2023  ",
    },
    {
      id: 3,
      name: "Exchange Bitcontent to Bitcoin",
      date: "March 2023",
    },
    {
      id: 4,
      name: "Send-Receive coin Bitconcent & mobile",
      date: "April 2023",
    },
    {
      id: 5,
      name: "Coin Marketcap, World Coin Index",
      date: "May 2023",
    },
  ];

  return (
    <div className={Style.app__roadmap__section}>
      <div className={`${Style.app__roadmap} container`}>
        <div className={Style.app__roadmap__top}>
          <h4>Road Map</h4>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            dianonumy eirmod tempor invidunt ut labore.
          </p>
        </div>

        <div className={Style.app__roadmap__bottom}>
          {roadmap.map((road) => {
            return (
              <div key={road.id} className={Style.app__roadmap__bottom__item}>
                <span>
                  <div className={Style.app__roadmap__bottom__item__circle}>
                    <div></div>
                  </div>
                </span>
                <h5>{road.date}</h5>
                <p>{road.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Road;
