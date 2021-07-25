import React from "react";
import Image from "../../../components/Image";
import styles from "./Card.module.sass";

const Card = (props) => {
    const item = props.item;
    return (
        <div className="col-lg-3 col-md-4 col-sm-6">
            <div className={styles.container}>
                <div className={styles.imageWrapper}>
                    <Image className={styles.image} src={item.image} />
                </div>
                <p className={styles.title}>
                    {item.title}
                </p>
                <div className="flex justify-between items-center">
                    <div className={styles.status}>
                        <p>Unclaimed</p>
                        <p>Royalty</p>
                    </div>
                    <span className={styles.price}>
                        $ {item.price}
                    </span>
                </div>
                <div className={styles.buttonContainer}>
                    <button>
                        Redeem Royalty
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
