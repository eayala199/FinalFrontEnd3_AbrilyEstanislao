import React from "react";
import { useState } from "react";


const Form = () => {
  const [nombre,setNombre] = useState("");
  const [email,setEmail] = useState("");
  //Aqui deberan implementar el form completo con sus validaciones
  const handlerEnviar = (event) => {
    event.preventDefault();
    
    if (nombre.trim().length < 5 || email.length < 6 || !validateEmail(email)) {
      alert("Por favor verifique su información nuevamente");
    } else {
      alert(`Gracias ${nombre}, te contactaremos cuando antes vía mail`);
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
          <label htmlFor="name">Nombre: </label>
          <input
            id="name"
            type="text"
            placeholder="Nombre y apellido"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            type="text"
            placeholder="Escriba su email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <input className="boton" type="submit" />
      </form>
    </div>
  );
};

export default Form;