import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { useWalletModal } from '@pancakeswap-libs/uikit'
import cn from "classnames";
import styles from "./Header.module.sass";
import Icon from "../Icon";
import Image from "../Image";

const Headers = () => {
  const [visibleNav, setVisibleNav] = useState(false);
  const [search, setSearch] = useState("");
  const { account, connect, reset } = useWallet()
  const { onPresentConnectModal } = useWalletModal(connect, reset, account);

  useEffect(async () => {
    if (!account && window.localStorage.getItem('accountStatus')) {
      connect('injected')
    }else{
      onPresentConnectModal();
    }
  }, [])

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
            to="/collection"
          >
            Profile
          </Link>
          <Link
            className={styles.primaryButton}
            to="/create"
          >
            Create
          </Link>
          {
            account &&
            <button
              className={styles.accountButton}
            >
              {account.substr(0,9)}
            </button>
          }
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
