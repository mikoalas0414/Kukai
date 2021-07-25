import React, { useState } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import Card from "./Card";
import { collectionList } from "../../mocks/mainList"
import styles from "./Collection.module.sass";

const Collection = ({ name }) => {
  const [menu, setMenu] = useState(0);

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
            collectionList.map((item, index) => (
              <Card item={item} key={index} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Collection;
