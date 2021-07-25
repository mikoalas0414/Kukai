import React, { useState } from "react";
import cn from "classnames";
import AvatarGroup from "@atlaskit/avatar-group";
import Icon from "../../components/Icon";
import { mainList } from "../../mocks/mainList"
import styles from "./Item.module.sass";

const owners = [
  {
    email: '',
    key: 'mcjin',
    name: 'MC Jin',
    src:
      "/images/avatar1.png",
    href: "/list/mcjin"
  },
  {
    email: '',
    key: 'hanjintan',
    name: 'Hanjin Tan',
    src:
      "/images/avatar2.png",
    href: "/list/hanjintan"
  }
];

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

  const handleIconType = (val) => {
    setIconType(val)
  }

  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-md-5">
          <img className={styles.image} src={mainList[id].image} />
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
                {mainList[id].title}
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
              <AvatarGroup appearance="stack" size="large" borderColor="transparent" data={owners} />
            </div>
            <p className={cn("ms-4", styles.largeText)}>
              MC Jin, Hanjin Tan
            </p>
          </div>
          <div className={cn("mt-2 mb-2", styles.tokenWrapper)}>
            {mainList[id].tokens} Tokens Available
          </div>
          <p className={cn("mt-3", styles.description)}>
            {mainList[id].description}
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
                bidList.map((item, index) => (
                  <div className="flex mt-1 mb-1" key={index}>
                    <div className={styles.bidFrom}>
                      <img src={item.image} />
                      <span>{item.name}</span>
                    </div>
                    <div className={styles.bidPrice}>
                      <span>Ξ {item.price}</span>
                    </div>
                    <div className={styles.bidDate}>
                      {item.date}
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="flex mt-4 justify-between">
            <button className={styles.buy}>
              Buy Now
            </button>
            <div className={styles.priceWrapper}>
              <p className={styles.bnbPrice}>1.00 BNB</p>
              <p className={styles.usdPrice}>~$2542.16</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
