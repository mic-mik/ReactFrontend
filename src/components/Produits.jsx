import React, { Fragment } from "react";
import Produit from "./Produit";
import styles from "../assets/styles/Produits.module.scss";

const Produits = ({ produits }) => {
  console.log(produits);
  return (
    <div
      className={` ${styles.produits} d-flex flex-row align-items-center justify-content-between flex-wrap`}
    >
      {produits.map((item) => (
        <Fragment key={item._id}>
          <Produit data={item} />
        </Fragment>
      ))}
    </div>
  );
};

export default Produits;
