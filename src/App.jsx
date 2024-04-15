import React, { useContext, useEffect, useState } from "react";
import { accueil } from "./data/data";
import styles from "./App.module.scss";
import ProduitFavorisContext from "./contexts/produitFavorisContext";
import Home from "./pages/Home/Home";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import Footer from "./components/Footer/Footer";
import Admin from "./pages/Admin/Admin";

const App = () => {
  const [produitsFavoris, setProduitsFavoris] = useState([]);
  const [page, setPage] = useState("home");
  // Si l'item est dans la liste on l'enlève
  // Sinon on l'ajoute
  const handleAjusterProduitFavoris = (item) => {
    let result = produitsFavoris.filter((t) => t._id === item._id);
    if (result.length > 0)
      setProduitsFavoris(produitsFavoris.filter((t) => t._id !== item._id));
    else setProduitsFavoris([...produitsFavoris, item]);
  };

  return (
    <div className={`${styles.app_container} d-flex flex-column`}>
      <ProduitFavorisContext.Provider
        value={{ data: produitsFavoris, setData: handleAjusterProduitFavoris }}
      >
        <Header setProduitsFavoris={setProduitsFavoris} setPage={setPage} />
        <Banner />

        {page == "home" && <Home accueil={accueil} />}
        {page == "admin" && <Admin />}
      </ProduitFavorisContext.Provider>
      <Footer />
    </div>
  );
};

export default App;
