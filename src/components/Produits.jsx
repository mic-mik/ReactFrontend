import React, { Fragment } from "react";
import Produit from "./Produit";
import styles from "../assets/styles/Produits.module.scss";

const Produits = ({ produits, visible, handleAjusterProduitFavoris }) => {
  return (
    <div className={`${styles.produits} ${visible ? styles.visible : ""}`}>
      <div className="d-flex flex-row align-items-center justify-content-between flex-wrap">
        {produits.map((item) => (
          <Fragment key={item._id}>
            <Produit
              data={item}
              handleAjusterProduitFavoris={handleAjusterProduitFavoris}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Produits;
