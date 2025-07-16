import React from 'react'
import x_logo from '../../assets/widgets/x_logo.png'
import insta_logo from '../../assets/widgets/instagram_logo.png'
import github_logo from '../../assets/widgets/github_logo.png'

const Footer = () => {
  return (
    <footer className='netlab-footer'>
      <div className='div-footer-info'>
        <div className='address-info'>
          <p className='address-info-text'>Koç University</p>
          <p className='address-info-text'>Rumelifeneri Yolu 34450</p>
          <p className='address-info-text'>Sarıyer / İstanbul</p>
          <p className='address-info-text'>Office: ENG106 / SNAZ28</p>
        </div>
        <div className='contact-info'>
        </div>
      </div>
      <div className='div-footer-widgets'>
      <a className='widget-link' href="https://x.com/NetLab14">
        <img className='widget-image' src={x_logo} alt="X (twitter...) Icon" />
      </a>
      <a className='widget-link' href="https://www.instagram.com/ku_netlab/">
        <img className='widget-image' src={insta_logo} alt="Instagram Icon" />
      </a>
      <a className='widget-link' href="https://github.com/netlab-ku">
        <img className='widget-image' src={github_logo} alt="Github Icon" />
      </a>
      </div>
      
    </footer>
  )
}

export default Footer