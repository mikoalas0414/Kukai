import React, { useState, useEffect } from "react";
import cn from "classnames";
import AvatarGroup from "@atlaskit/avatar-group";
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useWeb3 from '../../hooks/useWeb3'
import { getNFTById, buyNFT } from '../../utils/common'
import { useExchange } from '../../hooks/useContract'
import Icon from "../../components/Icon";
import styles from "./Item.module.sass";

const bidList = [
  {
    name: 'ajdhn',
    image: '/images/avatar1.png',
    price: '1.00',
    date: '2021/06/01 10:14'
  },
  {
    name: 'JohnH',
    image: '/images/avatar2.png',
    price: '0.98',
    date: '2021/05/31 20:34'
  }
];

const Item = ({ id }) => {
  const [iconType, setIconType] = useState('vimeo');
  const [item, setItem] = useState({nft:{}, artist: {}});
  const [creator, setCreator] = useState([]);
  const { account } = useWallet()
  const web3 = useWeb3();
  const exchangeContract = useExchange()
  let NFTItem;

  useEffect(async () => {
    NFTItem = await getNFTById(web3, exchangeContract, id)
    setItem(NFTItem.nft)
    setCreator([{email: '', key: NFTItem.nft.creator, name: NFTItem.artist.name, src: NFTItem.artist.imageUrl, href: '/list/'+NFTItem.nft.creator}])
  }, [])

  const handleIconType = (val) => {
    setIconType(val)
  }

  const handleBuyNFT = async () => {
    const response = await buyNFT(exchangeContract, account, id)
    console.log(response)
  }

  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-md-5">
          <img className={styles.image} src={item.imageUrl} />
          <p className={cn("pt-4 pb-3", styles.largeText)}>
            Stream it on...
          </p>
          <div className="flex mb-3">
            <div className={cn(styles.iconWrapper, { [styles.active]: iconType === 'vimeo' })} onClick={() => handleIconType('vimeo')}>
              <img src="/images/vimeo.png" />
            </div>
            <div className={cn(styles.iconWrapper, { [styles.active]: iconType === 'apple' })} onClick={() => handleIconType('apple')}>
              <img src="/images/apple.png" />
            </div>
            <div className={cn(styles.iconWrapper, { [styles.active]: iconType === 'youtube' })} onClick={() => handleIconType('youtube')}>
              <img src="/images/youtube.png" />
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="flex justify-between items-start">
            <div>
              <p className={styles.title}>
                {item.name}
              </p>
              <p className={styles.title}>
                (Re-released)
              </p>
            </div>
            <div className="flex">
              <div className={styles.favoriteWrapper}>
                <img className="me-1" src="/images/favorite.png" />
                <span className="me-1">12k</span>
              </div>
              <div className={styles.arrowWrapper}>
                <Icon name="arrow-next" size="18" fill="black" />
              </div>
            </div>
          </div>
          <div className="flex py-2 items-center">
            <div className={styles.avatarWrapper}>
              <AvatarGroup appearance="stack" size="large" borderColor="transparent" data={creator} />
            </div>
            <p className={cn("ms-4", styles.largeText)}>
              {item.artistName}
            </p>
          </div>
          <div className={cn("mt-2 mb-2", styles.tokenWrapper)}>
            {item.amountAvailable} Tokens Available
          </div>
          <p className={cn("mt-3", styles.description)}>
            {item.description}
          </p>
          <div className={cn("mt-3", styles.bidContainer)}>
            <div className={cn("py-2 px-4", styles.bidTitle)}>
              History
            </div>
            <div className={cn("py-2 px-4", styles.bidTitle)}>
              Bids
            </div>
            <div className="py-2 px-4">
              <div className="flex">
                <div className={styles.bidFrom}>
                  From
                </div>
                <div className={styles.bidPrice}>
                  Price
                </div>
              </div>
              {
                bidList.map((bidItem, index) => (
                  <div className="flex mt-1 mb-1" key={index}>
                    <div className={styles.bidFrom}>
                      <img src={bidItem.image} />
                      <span>{bidItem.name}</span>
                    </div>
                    <div className={styles.bidPrice}>
                      <span>Ξ {bidItem.price}</span>
                    </div>
                    <div className={styles.bidDate}>
                      {bidItem.date}
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="flex mt-4 justify-between">
            <button className={styles.buy} onClick={handleBuyNFT}>
              Buy Now
            </button>
            <div className={styles.priceWrapper}>
              <p className={styles.bnbPrice}>{item.price} BNB</p>
              <p className={styles.usdPrice}>~$2542.16</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
