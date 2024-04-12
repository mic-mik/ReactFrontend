import React, { useContext, useEffect, useState } from "react";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Header from "./components/Header";
import Banner from "./components/Banner";
import { accueil } from "./data/data";
import styles from "./assets/styles/App.module.scss";
import ProduitFavorisContext from "./contexts/produitFavorisContext";

const App = () => {
  const [produitsFavoris, setProduitsFavoris] = useState([]);
  const [produits, setProduits] = useState([]);
  // Si l'item est dans la liste on l'enlève
  // Sinon on l'ajoute
  const handleAjusterProduitFavoris = (item) => {
    let result = produitsFavoris.filter((t) => t._id === item._id);
    if (result.length > 0)
      setProduitsFavoris(produitsFavoris.filter((t) => t._id !== item._id));
    else setProduitsFavoris([...produitsFavoris, item]);
  };

  useEffect(() => {
    const getProduits = async () => {
      fetch("http://localhost:5000/produits")
        .then((reponse) => {
          if (reponse.ok) {
            reponse.json().then((data) => setProduits(data));
          }
        })
        .catch((e) => console.log(e));
    };
    getProduits();
  }, []);

  return (
    <div className={`${styles.app_container} d-flex flex-column`}>
      <ProduitFavorisContext.Provider
        value={{ data: produitsFavoris, setData: handleAjusterProduitFavoris }}
      >
        <Header setProduitsFavoris={setProduitsFavoris} />
        <Banner />
        <Content produits={produits} accueil={accueil} />
      </ProduitFavorisContext.Provider>
      <Footer />
    </div>
  );
};

export default App;
