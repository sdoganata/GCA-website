import React from 'react'
import netlab_banner from '../../assets/netlab_banner-3.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className={'netlab-navbar'}>
      <a className='a-navbar' href="https://netlab.ku.edu.tr/">
        <img className='banner-navbar' src={netlab_banner} alt="Netlab Banner" />
      </a>
      <div className='navbar-links'>
        <Link to="/GCA/" className={'navbar-link'}>Home</Link>
        <Link to="/GCA/tablebrowser/" className={'navbar-link'}>Browse</Link>
        <Link to="/GCA/help/" className={'navbar-link'}>Help</Link>
      </div>
    </nav>
  )
}

export default Navbar