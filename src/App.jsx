import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Routes/Home'
import Navbar from './Components/Navbar'
import Detail from './Routes/Detail'
import Contact from './Routes/Contact'
import Favs from './Routes/Favs'
import Footer from './Components/Footer'
import { ThemeContext } from './Components/ThemeContextProvider'

function App() {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`App ${theme}`}>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/dentist/:id" element={<Detail />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/favs" element={<Favs />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App