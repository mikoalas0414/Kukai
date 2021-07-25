import React from "react";
import cn from "classnames";
import Filter from "./Filter";
import Card from "./Card";
import styles from "./Home.module.sass";
import { mainList } from "../../mocks/mainList"

const Home = () => {
  return (
    <div className={cn("container flex pt-4", styles.container)}>
      <div className={cn("w-28 pe-5", styles.filterContainer)}>
        <Filter />
      </div>
      <div className="w-72">
        <div className="row">
          {
            mainList.map((item, index) => (
              <Card item={item} key={index} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
