import { useContext } from 'react'
import { Link } from "react-router-dom"
import { ThemeContext } from '../Components/ThemeContextProvider'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  const handleThemeChange = () => {
    toggleTheme()
  }

  return (
    <>
      <nav className={`navbar ${theme}`}>
          <Link to="/home">Home</Link>
          <Link to="/dentist/1">Dentist</Link>
          <Link to="/contacto">Contact</Link>
          <Link to="/favs">Favs</Link>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        
        <button onClick={handleThemeChange}>Change theme</button>
      </nav>
      
    </>
  )
}

export default Navbar