import { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faInstagram, faWhatsapp, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { ThemeContext } from '../Components/ThemeContextProvider'

const Footer = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <footer className={`footer ${theme}`}>

      <p>Powered by</p>
      <img src="/images/DH.png" alt='Logo de Digital House' className='foto' />

      <div className="icon-container">
          <img
            src="images/ico-facebook.png"
            alt="Logo facebook"
            className="icono"
          />
          <img
            src="images/ico-instagram.png"
            alt="Logo facebook"
            className="icono"
          />
          <img
            src="images/ico-tiktok.png"
            alt="Logo facebook"
            className="icono"
          />
          <img
            src="images/ico-whatsapp.png"
            alt="Logo facebook"
            className="icono"
          />
      </div>
    </footer>
  )
}

export default Footer