import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../Components/ThemeContextProvider";

const Card = ({ name, username, id }) => {
  const { theme } = useContext(ThemeContext);

  const addFav = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    favorites.push({ name, username, id });
    localStorage.setItem("favorites", JSON.stringify(favorites));
    // Aquí iría la lógica para agregar la Card en el localStorage
  };

  return (
    <div className={`card ${theme}`}>
      <img src="/images/doctor.jpg" alt="foto-dentista" className="imagen-card" />
      <div>
        <h3>{name}</h3>
        <h4>{username}</h4>
        <h5>{id}</h5>
      </div>
      <Link to={`/dentist/${id}`}>
        <button className="btnDetail">Go to Detail</button>
      </Link>
      <button onClick={addFav} className="favButton">Add fav</button>
    </div >
  )
}

export default Card