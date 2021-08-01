import React, { useState, useEffect } from "react";
import cn from "classnames";
import Filter from "./Filter";
import Card from "./Card";
import useWeb3 from '../../hooks/useWeb3'
import { getListByAll } from '../../utils/common'
import { useExchange } from '../../hooks/useContract'
import styles from "./Home.module.sass";

const Home = () => {
  const web3 = useWeb3()
  const exchangeContract = useExchange()
  const [list, setList] = useState([])

  useEffect(async () => {
    setList(await getListByAll(web3, exchangeContract))
  }, [])

  return (
    <div className={cn("container flex pt-4", styles.container)}>
      <div className={cn("w-28 pe-5", styles.filterContainer)}>
        <Filter />
      </div>
      <div className="w-72">
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

export default Home;
