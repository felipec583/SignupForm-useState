import React from "react";

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

export default Alert;
