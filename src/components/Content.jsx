import React from "react";
import Produits from "./Produits";
import styles from "../assets/styles/Content.module.scss";
import Accueil from "./Accueil";

const Content = ({ produits, accueil }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <Accueil accueil={accueil} />
      </div>
      <Produits produits={produits} />
    </div>
  );
};

export default Content;
