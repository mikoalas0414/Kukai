import React, { useState, useEffect } from "react";
import cn from "classnames";
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useWeb3 from '../../hooks/useWeb3'
import { getUserNFTs } from '../../utils/common'
import { useExchange } from '../../hooks/useContract'
import Card from "./Card";
import { collectionList } from "../../mocks/mainList"
import styles from "./Collection.module.sass";

const Collection = () => {
  const { account } = useWallet()
  const [menu, setMenu] = useState(0);
  const [list, setList] = useState([]);
  const web3 = useWeb3();
  const exchangeContract = useExchange()

  useEffect(async () => {
    setList(await getUserNFTs(web3, exchangeContract, account))
  }, [])

  return (
    <div>
      <div className={styles.banner}>
        <img src="/images/banner.png" />
        <div className={cn("container", styles.user)}>
          <span>My Collection</span>
        </div>
      </div>
      <div className={styles.divider}>
        <div className={cn("container", styles.menuWrapper)}>
          <span className={cn(styles.menu, {
            [styles.active]: menu === 0,
          })}
            onClick={() => setMenu(0)}>
            My collections (35)
          </span>
          <span className={cn(styles.menu, {
            [styles.active]: menu === 1,
          })}
            onClick={() => setMenu(1)}>
            My creations (2)
          </span>
          <span className={cn(styles.menu, {
            [styles.active]: menu === 2,
          })}
            onClick={() => setMenu(2)}>
            My favorites (34)
          </span>
        </div>
      </div>
      <div className={cn("container mt-5", styles.container)}>
        <div className="row">
          {
            list.map((item, index) => (
              <Card item={item} key={index} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Collection;
