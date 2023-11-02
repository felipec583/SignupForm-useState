import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Formulario = ({ setError }) => {
  const [isInputFocused, setIsInputFocused] = useState({
    emailFocus: false,
    passwordFocus: false,
  });
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const clearedData = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const inputValues = Object.values(data);
  const { email, password, confirmPassword } = data;
  const emailPattern =
    /^[a-zA-Z0-9._%+-ñÑáéíóúÁÉÍÓÚ]+@[a-zA-Z0-9.-ñÑáéíóúÁÉÍÓÚ]+\.[a-zA-Z]{2,4}$/;
  const passwordPattern =
    /^(?=.*[a-z]{2})(?=.*[A-Z])(?=.*\d{1})(?=.*[!-/:-@]).{6,8}$/;
  const passwordValidation = passwordPattern.test(password);
  const passwordEqualityValidation = password === confirmPassword;
  const emailValidation = emailPattern.test(email);
  function handleValidation(e) {
    e.preventDefault();
    const areInputValuesFilledIn = inputValues.some((item) => item === "");
    if (
      areInputValuesFilledIn ||
      !emailValidation ||
      !passwordValidation ||
      !passwordEqualityValidation
    ) {
      setError(true);
      return;
    }
    setError(false);
    setData(clearedData);
    setIsInputFocused((input) => ({ ...input, passwordFocus: false }));
    setIsInputFocused((input) => ({ ...input, emailFocus: false }));
  }

  function handleFocus(e) {
    if (e.target.id === "formName") setError("");
    if (e.target.id === "formBasicEmail") {
      setIsInputFocused((input) => ({ ...input, emailFocus: true }));
    } else {
      setIsInputFocused((input) => ({ ...input, emailFocus: false }));
    }

    if (e.target.id === "formPassword") {
      setIsInputFocused((input) => ({ ...input, passwordFocus: true }));
    } else {
      setIsInputFocused((input) => ({ ...input, passwordFocus: false }));
    }
  }
  return (
    <Form onSubmit={handleValidation}>
      <Form.Group className="mb-3 my-3" controlId="formName">
        <Form.Control
          type="name"
          placeholder="Ingresa nombre"
          onFocus={handleFocus}
          onChange={({ target }) =>
            setData((data) => ({ ...data, name: target.value.trimStart() }))
          }
          value={data.name}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3 my-3" controlId="formBasicEmail">
        <Form.Control
          type="email"
          placeholder="myemail@example.com"
          onFocus={handleFocus}
          onChange={({ target }) =>
            setData((data) => ({ ...data, email: target.value }))
          }
          value={data.email}
          required
        />
        {isInputFocused.emailFocus && !emailPattern.test(email) && (
          <p className="bg-danger bg-gradient my-2 rounded text-white fs-5">
            Debe ser un email válido
          </p>
        )}
      </Form.Group>

      <Form.Group className="mb-3 my-3" controlId="formPassword">
        <Form.Control
          type="password"
          placeholder="Ingresa contraseña"
          onFocus={handleFocus}
          onChange={({ target }) =>
            setData((data) => ({ ...data, password: target.value }))
          }
          value={data.password}
          required
        />
        {isInputFocused.passwordFocus &&
          (!passwordPattern.test(password) ? (
            <p className="my-2 text-bg-secondary text-whie rounded fs-6 p-1">
              La contraseña al menos debe contener: 6-8 carácteres
              <br />
              2 números, 1 letra mayúscula
              <br />2 minúsculas 1 símbolos (;,.;$%#)
            </p>
          ) : (
            <>
              <span>Correcto</span>{" "}
              <FontAwesomeIcon
                icon={faCheck}
                style={{ color: "#00b52e" }}
                className="my-1"
                size="2x"
              />
            </>
          ))}
      </Form.Group>
      <Form.Group className="mb-1 my-3" controlId="formConfirmPassword">
        <Form.Control
          type="password"
          placeholder="Confirma tu contraseña"
          onChange={({ target }) =>
            setData((data) => ({ ...data, confirmPassword: target.value }))
          }
          value={data.confirmPassword}
          required
        />
        <Form.Text className="text-muted">
          {password !== confirmPassword && (
            <p className="text-bg-danger rounded my-2 fs-5 text">
              Las contraseñas deben coincidir
            </p>
          )}
        </Form.Text>
        <Button type="submit" variant="success" className="my-3 fs-5 text ">
          Registrarse
        </Button>
      </Form.Group>
    </Form>
  );
};

export default Formulario;
