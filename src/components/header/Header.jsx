import { Link } from 'react-router-dom'
import logo from '../../assets/Logo.svg'
import './header.css'

const Header = () => {
  function Navbar() {
    return (
      <nav>
        <ul className='nav-content'>
          <li><Link to="/" role="navigation">Home</Link></li>
          <li><Link to="/about" role="navigation">About</Link></li>
          <li><Link to="/menu" role="navigation">Menu</Link></li>
          <li><Link to="/reservation" role="navigation">Reservation</Link></li>
          <li><Link to="/order-online" role="navigation">Order online</Link></li>
          <li><Link to="/login" role="navigation">Login</Link></li>
        </ul>
      </nav>
    )
  }

  return (
    <header>
      <img src={logo} alt="little lemon logo" />
      <Navbar/>
    </header>
  )
}

export default Header