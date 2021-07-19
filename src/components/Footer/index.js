import React, { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Footer.module.sass";
import Group from "./Group";
import Image from "../Image";
import Form from "../Form";
import Theme from "../Theme";

const items = [
  {
    title: "Learn more",
    menu: [
      {
        title: "Our Token",
        url: "#",
      },
      {
        title: "Staking",
        url: "#",
      },
    ],
  },
  {
    title: "Info",
    menu: [
      {
        title: "FAQ",
        url: "/faq",
      },
    ],
  },
];

const Footers = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    alert();
  };

  return (
    <footer className={styles.footer}>
      <div className={cn("container", styles.container)}>
        <div className={styles.row}>
          <div className={styles.col}>
            <Link className={styles.logo} to="/">
              <Image
                className={styles.pic}
                src="/images/stritelogo.png"
                alt="Fitness Pro"
              />
            </Link>
            <div className={styles.info}>The NFT Influencer Marketplace.</div>
          </div>
          <div className={styles.col}>
            {items.map((x, index) => (
              <Group className={styles.group} item={x} key={index} />
            ))}
          </div>
        </div>
        <div className={styles.foot}>
          <div className={styles.copyright}>Copyright © 2021 Strite NFT</div>
        </div>
      </div>
    </footer>
  );
};

export default Footers;
