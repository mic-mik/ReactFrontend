import React from "react";
import { useRouteError } from "react-router-dom";
import styles from "./NotFound.module.scss";

const Notfound = () => {
  const errors = useRouteError();
  console.log(errors);
  return (
    <div className={`${styles.notFound} d-flex flex-column align-items-center`}>
      <div className="flex-fill">
        {errors.status} || {errors.statusText}
      </div>
    </div>
  );
};

export default Notfound;
