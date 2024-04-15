import React, { useContext, useState } from "react";
import styles from "../../Produits.module.scss";
import ProduitFavorisContext from "../../../../../../contexts/produitFavorisContext";

const Produit = ({ data, saved }) => {
  const { image, name, note } = data;
  const produitFavorisContext = useContext(ProduitFavorisContext);

  const handleClickSaved = (item) => {
    produitFavorisContext.setData(item);
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
            saved ? styles.item_saved : ""
          }`}
        ></i>
      </div>
    </div>
  );
};

export default Produit;
