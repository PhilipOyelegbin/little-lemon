import { InternalLinkBtn } from '../../../components/cta/Cta';
import restaurant from '../../../assets/restaurant.jpg';

const Hero = () => {
  return (
    <section className='hero-section'>
      <div>
        <h1>Little Lemon</h1>
        <h4>Chicago</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, expedita harum in hic aliquam veritatis? Deleniti quia consequuntur tempore aspernatur nulla autem labore asperiores ipsum excepturi accusantium quibusdam molestias sit, libero rerum quisquam, sunt, atque mollitia?</p>
        <InternalLinkBtn url="/reservation" label="Reserve a Table"/>
      </div>
      <div>
        <img src={restaurant} alt="a view of the restaurant"/>
      </div>
    </section>
  )
}

export default Hero