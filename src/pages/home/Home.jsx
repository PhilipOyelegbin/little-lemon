import Hero from "./components/Hero"
import Specials from "./components/Specials"
import Testimonial from './components/Testimonial'
import About from './components/About'
import './home.css'

const Home = () => {
  return (
    <>
      <Hero/>
      <Specials/>
      <Testimonial/>
      <About/>
    </>
  )
}

export default Home