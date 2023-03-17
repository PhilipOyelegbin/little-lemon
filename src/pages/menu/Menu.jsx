import teamwork from '../../assets/teamwork.jpg'
import './menu.css'

const Menu = () => {
  return (
    <section className='menu-section'>
        <h5>Coming Soon</h5>
        <img src={teamwork} loading="lazy" alt="cover image of a work in progress" />
        <h3>I am working hard to build this page.</h3>
    </section>
  )
}

export default Menu