import React, { useState, useEffect } from "react";
import cn from "classnames";
import useWeb3 from '../../hooks/useWeb3'
import { getAllNFTsforArtist } from '../../utils/common'
import { useExchange } from '../../hooks/useContract'
import Card from "../Home/Card";
import styles from "./List.module.sass";

const List = ({ address }) => {
  const [list, setList] = useState([]);
  const [artist, setArtist] = useState({});
  const web3 = useWeb3();
  const exchangeContract = useExchange()
  let data;

  useEffect(async () => {
    data = await getAllNFTsforArtist(web3, exchangeContract, address);
    setList(data.list)
    setArtist(data.artist)
  }, [])

  return (
    <div>
      <div className={styles.banner}>
        <img src="/images/banner.png" />
        <div className={cn("container", styles.user)}>
          <img src={artist.imageUrl} />
          <span>{artist.name}</span>
        </div>
      </div>
      <div className={styles.divider}></div>
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

export default List;
