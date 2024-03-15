import React from "react";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Header from "./components/Header";
import Banner from "./components/Banner";
import { produits, accueil } from "./data/data";
import styles from "./assets/styles/Content.module.scss";

const App = () => {
  return (
    <div className={`${styles.app_container} d-flex flex-column`}>
      <Header />
      <Banner />
      <Content produits={produits} accueil={accueil} />
      <Footer />
    </div>
  );
};

export default App;
