import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHamburger } from 'react-icons/fa';
import logo from '../../assets/Logo.svg';
import './header.css';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  function handleMenu() {
    setToggleMenu(!toggleMenu)
  }

  toggleMenu ? document.getElementById("root").classList.add("fix-page") : document.getElementById("root").classList.remove("fix-page")

  function Navbar() {
    return (
      <nav className={`nav-container ${toggleMenu && "open-menu"}`}>
        <ul className='nav-content'>
          <li onClick={handleMenu}><NavLink to="/" role="navigation">Home</NavLink></li>
          <li onClick={handleMenu}><NavLink to="about" role="navigation">About</NavLink></li>
          <li onClick={handleMenu}><NavLink to="menu" role="navigation">Menu</NavLink></li>
          <li onClick={handleMenu}><NavLink to="reservation" role="navigation">Reservation</NavLink></li>
          <li onClick={handleMenu}><NavLink to="order-online" role="navigation">Order online</NavLink></li>
          <li onClick={handleMenu}><NavLink to="login" role="navigation">Login</NavLink></li>
        </ul>
      </nav>
    )
  }

  return (
    <header>
      <img src={logo} alt="little lemon logo" />
      <FaHamburger className="menu-btn" onClick={handleMenu} />
      <Navbar/>
    </header>
  )
}

export default Header