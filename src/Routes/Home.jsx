import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import Card from "../Components/Card"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const [dentist, setDentist] = useState([]);

  const getDentist = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json()
    setDentist(data)
    
  }

useEffect(() => {
  getDentist()
})

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {dentist.length ? dentist.map(d => (<Link to ={`/dentist/${d.id}`} key={d.id}>
          <Card name={d.name} username={d.username} id={d.id}/>
        </Link>))
        : null}
      </div>
    </main>
  )
  }
export default Home