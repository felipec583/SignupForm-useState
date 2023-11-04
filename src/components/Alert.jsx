import React from "react";

/* area de alert */
const Alert = ({ error }) => {
  return error === "" ? null : (
    <div
      className={`alert ${error ? "alert-danger" : "alert-success"}`}
      role="alert"
    >
      {error
        ? "Debes llenar todos los campos correctamente"
        : "Registro con éxito"}
    </div>
  );
};
/* cierre area de alert */

export default Alert;
