import teamwork from '../../assets/teamwork.jpg'
import './about.css'

const About = () => {
  return (
    <section className='about-section'>
        <h5>Coming Soon</h5>
        <img src={teamwork} loading="lazy" alt="cover image of a work in progress" />
        <h3>I am working hard to build this page.</h3>
    </section>
  )
}

export default About