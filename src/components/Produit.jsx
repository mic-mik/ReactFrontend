import React, { useState } from "react";
import styles from "../assets/styles/Produits.module.scss";

const Produit = ({ data }) => {
  const { image, name, description } = data;
  const [itemSaved, setItemSaved] = useState(false);

  const handleClickSaved = () => {
    setItemSaved(!itemSaved);
  };

  return (
    <div
      onClick={handleClickSaved}
      className={`${styles.produit} hover_opacity`}
    >
      <div>
        <img src={image} alt={name} />
      </div>
      <div className={styles.description_produit}>
        <h3>{name}</h3>
        <p>{description}</p>
        <i
          className={`fa-solid fa-xl fa-bookmark ${
            itemSaved ? styles.item_saved : ""
          }`}
        ></i>
      </div>
    </div>
  );
};

export default Produit;
