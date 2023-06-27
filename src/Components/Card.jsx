import React, { useContext } from "react";
import { ThemeContext } from "../Components/ThemeContextProvider";

const Card = ({ name, username, id }) => {
  const { theme } = useContext(ThemeContext);

  const addFav = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites.push({name, username, id})
    localStorage.setItem("favorites", JSON.stringify(favorites))
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">
      <img src="/images/doctor.jpg" alt="foto-dentista" className="imagen-card"/>
      <div className={`card ${theme}`}>
        <h3>{name}</h3>
        <h4>{username}</h4>
        <h5>{id}</h5>
      </div>

      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  )
}

export default Card