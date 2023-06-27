import React, { useState } from "react";
import Error from "./Error";

const Form = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handlerEnviar = (event) => {
    event.preventDefault();

    if (nombre.trim().length < 5 || email.length < 6 || !validateEmail(email)) {
      setErrorMessage("Por favor verifique su información nuevamente");
    } else {
      setErrorMessage(`Gracias ${nombre}, te contactaremos lo antes posible vía email`);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <form onSubmit={handlerEnviar}>
        <div>
          <input
            id="name"
            type="text"
            placeholder="Nombre y apellido"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="input-field"
          />
        </div>
        <div>
          <input
            id="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input-field"
          />
        </div>
        <input className="boton" type="submit" />
      </form>
      {errorMessage ? <Error message={errorMessage}/> : null }
    </div>
  );
};

export default Form;

