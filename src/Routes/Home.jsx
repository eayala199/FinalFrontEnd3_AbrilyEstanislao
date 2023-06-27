import React, { useEffect, useState } from 'react'
import Card from "../Components/Card"

// Este componente deberá ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentists, setDentists] = useState([]);

  const getDentists = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    setDentists(data);
  };

  useEffect(() => {
    getDentists();
  }, []);

  return (
    <main className="">
      <h1>Home</h1>
      <div className='card-grid'>
        {dentists.length ? dentists.map(dentist => (
          <Card
            key={dentist.id}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        )) : null}
      </div>
    </main>
  );
};

export default Home;
