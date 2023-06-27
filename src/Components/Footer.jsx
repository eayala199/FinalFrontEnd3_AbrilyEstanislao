import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook, faInstagram, faWhatsapp, faTiktok } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      
        <p>Powered by</p>
        <img src="/images/DH.png" alt='DH-logo' className='foto' />
      
      <div className="icon-container">
        <FontAwesomeIcon icon={faSquareFacebook} size="2x" />
        <FontAwesomeIcon icon={faInstagram} size="2x"/>
        <FontAwesomeIcon icon={faWhatsapp} size="2x"/>
        <FontAwesomeIcon icon={faTiktok} size="2x"/>
      </div>
    </footer>
  )
}

export default Footer