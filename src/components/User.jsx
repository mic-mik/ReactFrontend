import React from "react";
import styles from "../assets/styles/User.module.scss";

const User = ({ user, handleDeconnexion }) => {
  return (
    <>
      {user && (
        <div className={styles.bienvenue}>
          Bienvenue <span>Lilia Ould Hocine</span>,
          <a onClick={handleDeconnexion} href="#">
            Déconnexion
          </a>
        </div>
      )}
    </>
  );
};

export default User;
