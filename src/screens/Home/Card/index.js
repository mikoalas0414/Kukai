import React from "react";
import { Link } from "react-router-dom";
import Image from "../../../components/Image";
import Icon from "../../../components/Icon";
import styles from "./Card.module.sass";

const Card = (props) => {
  const item = props.item;
  return (
    <div className="col-lg-4 col-md-6">
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Link className={styles.back} to={`/item/${item.id}`}>
            <Image className={styles.image} src={item.image} />
          </Link>
          <div className={styles.favorite} >
            <Icon name="heart" size="15" width="18" height="17" fill="white" />
          </div>
        </div>
        <p className={styles.title}>
          {item.title}
        </p>
        <p className={styles.owner}>
          {item.owner}
        </p>
        <div className="flex justify-between items-center">
          <span className={styles.price}>
            Ξ {item.price}
          </span>
          <span className={styles.token}>
            {item.tokens} tokens
          </span>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.play}>
            Play now
          </button>
          <button className={styles.buy}>
            Buy NFT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
