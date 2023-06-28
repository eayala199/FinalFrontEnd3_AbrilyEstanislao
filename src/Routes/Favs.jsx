import React from 'react';
import Card from '../Components/Card';

const Favs = () => {
  // Obtener los dentistas destacados almacenados en el localStorage
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  // Filtrar los favoritos para evitar duplicados basados en el ID del dentista
  const uniqueFavorites = favorites.filter(
    (favorite, index, self) =>
      index === self.findIndex((f) => f.id === favorite.id)
  );

  return (
    <main>
      <h1>Dentists favs</h1>
      <div className="card-grid">
        {uniqueFavorites.map((favorite) => (
          <Card
            key={favorite.id}
            name={favorite.name}
            username={favorite.username}
            id={favorite.id}
          />
        ))}
      </div>
    </main>
  );
};

export default Favs;
