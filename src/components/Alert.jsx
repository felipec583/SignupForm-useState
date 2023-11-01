import React from "react";

const Alert = ({ error }) => {
  if (error === "") {
    return null;
  } else if (error) {
    return (
      <div className={"alert alert-danger"} role="alert">
        Debes llenar todos los campos correctamente
      </div>
    );
  } else if (!error) {
    return (
      <div className={"alert alert-success fs-5 text"} role="alert">
        Registro con éxito
      </div>
    );
  }
};

export default Alert;
