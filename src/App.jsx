import React, { useState } from "react";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Header from "./components/Header";
import Banner from "./components/Banner";
import { produits, accueil } from "./data/data";
import styles from "./assets/styles/App.module.scss";

const App = () => {
  const [produitsFavoris, setProduitsFavoris] = useState([]);
  const handleAjusterProduitFavoris = (item, saved) => {
    let newProduitsFavoris = produitsFavoris.filter(
      (produit) => produit._id != item._id
    );
    newProduitsFavoris = saved
      ? [item, ...newProduitsFavoris]
      : newProduitsFavoris;
    setProduitsFavoris(newProduitsFavoris);
  };

  return (
    <div className={`${styles.app_container} d-flex flex-column`}>
      <Header
        produitsFavoris={produitsFavoris}
        setProduitsFavoris={setProduitsFavoris}
      />
      <Banner />
      <Content
        produits={produits}
        accueil={accueil}
        handleAjusterProduitFavoris={handleAjusterProduitFavoris}
      />
      <Footer />
    </div>
  );
};

export default App;
