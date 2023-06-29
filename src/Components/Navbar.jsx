import { useContext } from 'react'
import { Link } from "react-router-dom"
import { ThemeContext } from '../Components/ThemeContextProvider'

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  
  const handleThemeChange = () => {
    toggleTheme()
  }

  return (
    <>
      <nav className={`navbar ${theme}`}>
        <ul className="navbar-links">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/dentist/1">Dentist</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/favs">Favs</Link></li>
        </ul>
        <button onClick={handleThemeChange} className='btnThemes'>Change theme</button>
      </nav>
    </>
  )
}

export default Navbar