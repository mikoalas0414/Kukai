import React from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import styles from "./Create.module.sass";

const Create = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className={cn("container", styles.container)}>
        <p className={styles.title}>Create NFT</p>
        <input type="text" name="title" className="create" placeholder="Song title" />
        <input type="text" name="image" className="create" placeholder="Image Url" />
        <input type="number" name="price" className="create" step="any" placeholder="Price (BNB)" />
        <input type="number" name="number" className="create" step="any" placeholder="Number of NFTs" />
        <textarea name="description" className="create" placeholder="Description (Max 50 words)" rows="4">
        </textarea>
        <button type="submit">Create NFT</button>
      </div>
    </form>
  );
};

export default Create;
