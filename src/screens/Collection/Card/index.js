import React from "react";
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { redeemUserNFTRoyalty } from '../../../utils/common'
import { useExchange } from '../../../hooks/useContract'
import Image from "../../../components/Image";
import styles from "./Card.module.sass";

const Card = (props) => {
    const { account } = useWallet()
    const exchangeContract = useExchange()

    const item = props.item;

    const handleRedeem = async () => {
        const response = await redeemUserNFTRoyalty(exchangeContract, account, item.id)
        console.log(response)
    }

    return (
        <div className="col-lg-3 col-md-4 col-sm-6">
            <div className={styles.container}>
                <div className={styles.imageWrapper}>
                    <Image className={styles.image} src={item.imageUrl} />
                </div>
                <p className={styles.title}>
                    {item.name}
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
                    <button onClick={handleRedeem}>
                        Redeem Royalty
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
