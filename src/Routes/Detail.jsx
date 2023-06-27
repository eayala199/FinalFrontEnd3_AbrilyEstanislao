import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const [dentist, setDentist] = useState(null);

  const getDentist = async () => {
    try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
      const data = await res.json();
      setDentist(data);
    } catch (error) {
      console.error('Error fetching dentist:', error);
    }
  };

  useEffect(() => {
    getDentist();
  }, [id]);

  if (!dentist) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      <h1>{dentist.name}</h1>
      <p>Email: {dentist.email}</p>
      <p>Teléfono: {dentist.phone}</p>
      <p>Sitio web: {dentist.website}</p>
    </main>
  );
};

export default Detail;


