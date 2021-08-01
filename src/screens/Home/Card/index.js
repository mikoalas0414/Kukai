import React from "react";
import { Link } from "react-router-dom";
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { buyNFT } from '../../../utils/common'
import { useExchange } from '../../../hooks/useContract'
import Image from "../../../components/Image";
import Icon from "../../../components/Icon";
import styles from "./Card.module.sass";

const Card = (props) => {
  const item = props.item
  const { account } = useWallet()
  const exchangeContract = useExchange()

  const handleBuyNFT = async () => {
    console.log(account)
    const response = await buyNFT(exchangeContract, account, item.id)
    console.log(response)
  }

  return (
    <div className="col-lg-4 col-md-6">
      <div className={styles.container}>
        <div className={styles.imageWrapper}>
          <Link className={styles.back} to={`/item/${item.id}`}>
            <Image className={styles.image} src={item.imageUrl} />
          </Link>
          <div className={styles.favorite} >
            <Icon name="heart" size="15" width="18" height="17" fill="white" />
          </div>
        </div>
        <p className={styles.title}>
          {item.name}
        </p>
        <p className={styles.owner}>
          {item.artistName}
        </p>
        <div className="flex justify-between items-center">
          <span className={styles.price}>
            Ξ {item.price}
          </span>
          <span className={styles.token}>
            {item.amountAvailable} tokens
          </span>
        </div>
        <div className={styles.buttonContainer}>
          <a className={styles.play} href={item.streamUrl} target="_blank">
            Play now
          </a>
          <button className={styles.buy} onClick={handleBuyNFT}>
            Buy NFT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
