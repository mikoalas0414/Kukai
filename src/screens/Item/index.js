import React, { useState } from "react";
import cn from "classnames";
import styles from "./Item.module.sass";
import Users from "./Users";
import Control from "./Control";
import Options from "./Options";

const navLinks = ["Info"];

const categories = [
  {
    category: "black",
    content: "art",
  },
  {
    category: "purple",
    content: "unlockable",
  },
];

const users = [
  {
    name: "John Stritian",
    position: "Creator",
    avatar: "/images/content/avatar-1.jpg",
  },
];

const Item = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className={cn("section", styles.section)}>
        <div className={cn("container", styles.container)}>
          <div className={styles.bg}>
            <div className={styles.preview}>
              <div className={styles.categories}>
                {categories.map((x, index) => (
                  <div
                    className={cn(
                      { "status-black": x.category === "black" },
                      { "status-purple": x.category === "purple" },
                      styles.category
                    )}
                    key={index}
                  >
                    {x.content}
                  </div>
                ))}
              </div>
              <img
                srcSet="https://images.unsplash.com/photo-1584282000369-8b26844c9188?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fGFydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                src="https://images.unsplash.com/photo-1584282000369-8b26844c9188?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fGFydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                alt="Item"
              />
            </div>
            {/* <Options className={styles.options} /> */}
          </div>
          <div className={styles.details}>
            <h1 className={cn("h3", styles.title)}>The easy time</h1>
            <div className={styles.cost}>
              <div className={cn("status-stroke-green", styles.price)}>
                3000 Strite
              </div>
              <div className={cn("status-stroke-black", styles.price)}>
                $2,429.87
              </div>
              <div className={styles.counter}>10 in stock</div>
            </div>
            <div className={styles.info}>
              Purchasing this card will get you access to the exclusive John
              Stritian VIP concert experience.
            </div>
            {/* <div className={styles.nav}> */}
            {/* {navLinks.map((x, index) => (
                <button
                  className={cn(
                    { [styles.active]: index === activeIndex },
                    styles.link
                  )}
                  onClick={() => setActiveIndex(index)}
                  key={index}
                >
                  {x}
                </button>
              ))} */}
            {/* </div> */}
            <Users className={styles.users} items={users} />
            <Control className={styles.control} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
