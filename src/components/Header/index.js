import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { useWallet } from '@binance-chain/bsc-use-wallet'
import cn from "classnames";
import styles from "./Header.module.sass";
import Icon from "../Icon";
import Image from "../Image";

const nav = [
  // {
  //   url: "/faq",
  //   title: "How it works",
  // },
];

const Headers = () => {
  const [visibleNav, setVisibleNav] = useState(false);
  const [search, setSearch] = useState("");

  const { account, connect } = useWallet()
  useEffect(() => {
    if (!account && window.localStorage.getItem('accountStatus')) {
      connect('injected')
    }
  }, [account, connect])

  const handleSubmit = (e) => {
    alert();
  };

  return (
    <header className={styles.header}>
      <div className={cn("container", styles.container)}>
        <Link className={styles.logo} to="/">
          <Image className={styles.pic} src="/images/logo.png" />
          <span>Discover</span>
        </Link>
        <div className={cn(styles.wrapper, { [styles.active]: visibleNav })}>
          <input
            className={styles.input}
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            name="search"
            placeholder="Search artists and releases"
            required
          />
          <button className={styles.result}>
            <Icon name="search" size="20" />
          </button>
        </div>
        <div className={cn(styles.buttonWrapper)}>
          <Link
            className={cn(styles.profileButton)}
            to="#"
          >
            Profile
          </Link>
          <Link
            className={cn("primary-button", styles.primaryButton)}
            to="#"
          >
            Create
          </Link>
        </div>
      </div>
      <div className={cn("container", styles.mobileContainer)}>
        <div className={cn(styles.wrapper, { [styles.active]: visibleNav })}>
          <input
            className={styles.input}
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            name="search"
            placeholder="Search artists and releases"
            required
          />
          <button className={styles.result}>
            <Icon name="search" size="20" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Headers;
