import { Link } from 'react-router-dom'
import logo from '../../assets/Logo.svg'
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
        </ul>
      </div>
      <div>
        <h4 aria-label="Footer contact heading">Contact</h4>
        <ul>
          <li>2179 Vesta Drive, Chicago Illinois</li>
          <li><a href="tel: 773-660-4404" role="navigation">773-660-4404</a></li>
          <li><a href="mailto: info@littlelemon.com" role="navigation">info@littlelemon.com</a></li>
        </ul>
      </div>
      <div>
        <h4 aria-label="Footer social media heading">Social Media Links</h4>
        <ul>
          <li><Link to="/m.facebook.com/little.lemon" role="navigation">https://m.facebook.com/little.lemon</Link></li>
          <li><Link to="/twitter.com/little.lemon" role="navigation">https://twitter.com/little.lemon</Link></li>
          <li><Link to="/instagram.com/little.lemon" role="navigation">https://instagram.com/little.lemon</Link></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer