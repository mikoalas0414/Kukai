import React from "react";
import cn from "classnames";
import { useWallet } from '@binance-chain/bsc-use-wallet'
import useWeb3 from '../../hooks/useWeb3'
import { createNFT } from '../../utils/common'
import { useExchange } from '../../hooks/useContract'
import styles from "./Create.module.sass";

const Create = () => {
  const web3 = useWeb3()
  const { account } = useWallet()
  const exchangeContract = useExchange()

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const response = await createNFT(web3, exchangeContract, account, data)
    console.log(response)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={cn("container", styles.container)}>
        <p className={styles.title}>Create NFT</p>
        <input type="text" name="name" className="create" placeholder="Song title" />
        <input type="text" name="imageUrl" className="create" placeholder="Image Url" />
        <input type="number" name="price" className="create" step="any" placeholder="Price (BNB)" />
        <input type="number" name="amountAvailable" className="create" step="any" placeholder="Number of NFTs" />
        <textarea name="description" className="create" placeholder="Description (Max 50 words)" rows="4">
        </textarea>
        <button type="submit" disabled>Create NFT</button>
      </div>
    </form>
  );
};

export default Create;
