import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import styles from "./Admin.module.scss";

const Admin = () => {
  const schema = yup.object({
    name: yup.string().min(1, "Nom trop court.").required(),
    note: yup.string().min(5, "Notes trop courtes.").required(),
    image: yup.string().min(5, "Url de l'image invalide.").required(),
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function submit(values) {
    console.log(values);
  }

  return (
    <div className={styles.add_product_form}>
      <h2>Ajouter un produit</h2>
      <form onSubmit={handleSubmit(submit)} action="">
        <div>
          <label htmlFor="name">Le nom du produit : </label>
          <input type="text" {...register("name")} />
          {errors?.name && (
            <span style={{ color: "red" }}> {errors.name.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="note">Les notes du produit : </label>
          <input type="text" {...register("note")} />
          {errors?.note && (
            <span style={{ color: "red" }}> {errors.note.message}</span>
          )}
        </div>
        <div>
          <label htmlFor="image">Le lien de l'image du produit : </label>
          <input type="text" {...register("image")} />
          {errors?.image && (
            <span style={{ color: "red" }}> {errors.image.message}</span>
          )}
        </div>
        <button type="submit" className="decouvrir">
          Sauvegarder
        </button>
      </form>
    </div>
  );
};

export default Admin;
