import { Link } from 'react-router-dom'
import logo from '../../assets/Logo .svg'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <img src={logo} alt="" />
      <div>
        <h4 aria-label="Footer navigation heading">Doormat Navigation</h4>
        <ul>
          <li><Link to="/" role="navigation">Home</Link></li>
          <li><Link to="about" role="navigation">About</Link></li>
          <li><Link to="menu" role="navigation">Menu</Link></li>
          <li><Link to="reservation" role="navigation">Reservation</Link></li>
          <li><Link to="order-online" role="navigation">Order online</Link></li>
          <li><Link to="login" role="navigation">Login</Link></li>
        </ul>
      </div>
      <div>
        <h4 aria-label="Footer contact heading">Contact</h4>
        <ul>
          <li><Link to="/" role="navigation">Address</Link></li>
          <li><Link to="/" role="navigation">Phone number</Link></li>
          <li><Link to="/" role="navigation">Email</Link></li>
        </ul>
      </div>
      <div>
        <h4 aria-label="Footer social media heading">Social Media Links</h4>
        <ul>
          <li><Link to="/" role="navigation">Address</Link></li>
          <li><Link to="/" role="navigation">Phone number</Link></li>
          <li><Link to="/" role="navigation">Email</Link></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer