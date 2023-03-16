import { InternalLinkBtn } from '../../../components/cta/Cta';
import restaurant from '../../../assets/restauranfood.jpg';

const Hero = () => {
  return (
    <section className='hero-section'>
      <div>
        <h1>Little Lemon</h1>
        <h4>Chicago</h4>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
        <InternalLinkBtn url="/reservation" label="Reserve a Table"/>
      </div>
      <div className='img-container'>
        <img src={restaurant} loading="lazy" alt="a view of the restaurant"/>
      </div>
    </section>
  )
}

export default Hero