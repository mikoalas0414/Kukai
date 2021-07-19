import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Description.module.sass";
import Image from "../../../components/Image";

const Description = () => {
  return (
    <div className={styles.section}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <div className={styles.stage}></div>
          <h1 className={cn("h1", styles.title)}>
            NFTs from your favorite influencers
          </h1>
          <div className={styles.text}>Use Strite, BNB, or Clout to pay!</div>
          <div className={styles.btns}>
            <Link className={cn("button", styles.button)} to="#">
              Buy Strite
            </Link>
          </div>
        </div>
        <div className={styles.gallery}>
          <div className={styles.preview}>
            <Image src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=766&q=80" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
