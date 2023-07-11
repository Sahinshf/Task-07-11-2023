import React from "react";
import Styles from "./Team.module.css";

const Team = () => {
  const members = [
    {
      id: 1,
      name: "Mdisdh Dksdd",
      image:
        "https://preview.uideck.com/items/crypto/assets/img/xteam-1.png.pagespeed.ic.Lx5E0jQjsw.webp",
      profession: "CEO",
    },
    {
      id: 2,
      name: "Rdisdh Yksdd",
      image:
        "https://preview.uideck.com/items/crypto/assets/img/xteam-2.png.pagespeed.ic.77guCKt61q.webp",
      profession: "Product Manager",
    },
    {
      id: 3,
      name: "Qdisdh Eksdd",
      image:
        "https://preview.uideck.com/items/crypto/assets/img/xteam-3.png.pagespeed.ic.Q66YLqoccS.webp",
      profession: "Business Manager",
    },
    {
      id: 4,
      name: "Shdjsiw Sdklj  ",
      image:
        "https://preview.uideck.com/items/crypto/assets/img/xteam-4.png.pagespeed.ic.tA_rjPtW9M.webp",
      profession: "Digital Marketer",
    },
  ];

  return (
    <div className={Styles.app__team__section}>
      <div className={`${Styles.app__team} container`}>
        <div className={Styles.app__team__top}>
          <h3>Meet Our Team</h3>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            dianonumy eirmod tempor invidunt. Cryptocash
          </p>
        </div>

        <div className={Styles.app__team__bottom}>
          {members.map((member) => {
            return (
              <div className={Styles.app__team__bottom__item}>
                <div>
                  <img src={member.image} alt="" />
                </div>
                <div></div>
                <h5>{member.name}</h5>
                <p>{member.profession}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Team;
