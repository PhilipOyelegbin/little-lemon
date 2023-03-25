import Hero from "./components/Hero"
import Specials from "./components/Specials"
import Testimonial from './components/Testimonial'
import About from './components/About'
import './home.css'
import { useTransition } from "react"

const Home = () => {
  const [isPending, startTransition] = useTransition()
  return (
    <>
      <Hero/>
      <Specials/>
      <Testimonial/>
      {isPending ? <h4>Loading...</h4> : startTransition && <About/>}
    </>
  )
}

export default Home