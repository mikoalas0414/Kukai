import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import Card from "../Home/Card";
import { subList } from "../../mocks/mainList"
import styles from "./List.module.sass";

const List = ({ name }) => {
  return (
    <div>
      <div className={styles.banner}>
        <img src="/images/banner.png" />
        <div className={cn("container", styles.user)}>
          <img src="/images/avatar1.png" />
          <span>JAY CHOU </span>
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={cn("container mt-5", styles.container)}>
        <div className="row">
          {
            subList.map((item, index) => (
              <Card item={item} key={index} />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default List;
