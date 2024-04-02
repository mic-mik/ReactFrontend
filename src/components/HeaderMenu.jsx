import { useContext } from "react";
import styles from "../assets/styles/HeaderMenu.module.scss";
import ProduitsFavoris from "./ProduitsFavoris";
import ProduitFavorisContext from "../contexts/produitFavorisContext";

function HeaderMenu() {
  const produitsFavorisContext = useContext(ProduitFavorisContext);
  return (
    <ul className={`${styles.menuContainer} border p-20`}>
      {produitsFavorisContext.data.length > 0 ? (
        produitsFavorisContext.data.map((favoris) => (
          <li key={favoris._id}>
            <ProduitsFavoris produit={favoris} />
          </li>
        ))
      ) : (
        <li>Aucun Favoris</li>
      )}
    </ul>
  );
}

export default HeaderMenu;
