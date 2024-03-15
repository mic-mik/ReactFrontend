import React from "react";
import Produits from "./Produits";
import perfume from "../assets/images/perfume.jpg";
import styles from "../assets/styles/Content.module.scss";

const Content = ({ produits }) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className="image_accueil">
          <img src={perfume} alt="Nos produits" />
        </div>
        <div className="text_accueil m-20 p-20">
          <div>
            <h1>HAUTE PARFUMERIE FRANÇAISE</h1>
            <p>
              Inspirée par la matière et ceux qui la révèlent, Atelier Materi
              est une maison de création française qui fait le choix d’un
              nouveau luxe. Un luxe honnête, sincère et authentique qui prend le
              temps de faire.
            </p>
            <p>
              La Maison associe vision contemporaine et savoir-faire artisanal
              et s’entoure d’artistes et d’artisans, depuis la récolte de ses
              matières premières jusqu’à la réalisation de ses fragrances,
              flacons et coffrets.
            </p>
            <p>
              Chaque fragrance de La Maison offre une écriture olfactive
              minimale et contemporaine autour d’une matière première revisitée
              avec conviction, partis-pris et indépendance. Ses créations se
              distinguent par leur caractère épuré, moderne et singulier.
            </p>
            <a className="hover_opacity decouvrir" href="#">
              DÉCOUVRIR
            </a>
          </div>
        </div>
      </div>
      <Produits produits={produits} />
    </div>
  );
};

export default Content;
