import React from "react";
import logo from "../assets/images/AM-logo.svg";
import styles from "../assets/styles/Header.module.scss";

const Header = ({ saved }) => {
  return (
    <div className={`${styles.header} d-flex flex-row align-items-center`}>
      <div className="flex-fill">
        <a href="#">
          <img src={logo} alt="Atelier Materi - Haute parfumerie française" />
        </a>
      </div>
      <ul>
        <li>
          <span className={styles.produitsFavoris}>{saved}</span>
          <i className="fa-solid fa-bag-shopping fa-xl panier hover_opacity"></i>
        </li>
        <li className="mr-15">
          <i className="fa-solid fa-user fa-xl connexion hover_opacity"></i>
        </li>
      </ul>
    </div>
  );
};

export default Header;
