import React, { useState } from "react";
import styles from "../assets/styles/Produits.module.scss";

const Produit = ({ data, handleAjusterProduitFavoris }) => {
  const { image, name, note } = data;
  const [itemSaved, setItemSaved] = useState(false);

  const handleClickSaved = (item) => {
    setItemSaved(!itemSaved);
    handleAjusterProduitFavoris(item, !itemSaved);
  };

  return (
    <div
      onClick={() => handleClickSaved(data)}
      className={`${styles.produit} hover_opacity`}
    >
      <div>
        <img src={image} alt={name} />
      </div>
      <div className={styles.description_produit}>
        <h3>{name}</h3>
        <p>{note}</p>
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
