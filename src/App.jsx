import React, { useState } from "react";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Header from "./components/Header";
import Banner from "./components/Banner";
import { produits, accueil } from "./data/data";
import styles from "./assets/styles/App.module.scss";

const App = () => {
  const [produitsFavoris, setProduitsFavoris] = useState([]);
  const handleAjusterProduitFavoris = (produitId, saved) => {
    let newProduitsFavoris = produitsFavoris.filter(
      (item) => item != produitId
    );
    newProduitsFavoris = saved
      ? [produitId, ...newProduitsFavoris]
      : newProduitsFavoris;
    setProduitsFavoris(newProduitsFavoris);
  };

  return (
    <div className={`${styles.app_container} d-flex flex-column`}>
      <Header saved={produitsFavoris.length} />
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
