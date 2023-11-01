import React from "react";
import Alert from "./Alert";
import SocialButton from "./SocialButton";
import Formulario from "./Formulario";

const Registro = ({ setError, error }) => {
  return (
    <section>
      <h1 className="fw-bold">Crea una cuenta</h1>
      <p>O usa un email para registrarte</p>
      <SocialButton
        github={"github"}
        linkedin={"linkedin"}
        facebook={"facebook"}
      />
      <Formulario setError={setError} error={error} />
      <Alert error={error} />
    </section>
  );
};

export default Registro;
