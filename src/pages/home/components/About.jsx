import { FaChevronCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import cover_image1 from '../../../assets/Mario and Adrian A.jpg';
import cover_image2 from '../../../assets/Mario and Adrian b.jpg';

const About = () => {
  return (
    <section className='about-prev-section'>
      <div>
        <h1>Little Lemon</h1>
        <h4>Chicago</h4>
        <p>
          Based in Chicago, Illinois, Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes served with a modern twist. The chefs draw inspiration from Italian, Greek, and Turkish culture and have a menu of 12–15 items that they rotate seasonally. The restaurant has a rustic and relaxed atmosphere with moderate prices, making it a popular place for a meal any time of the day.
          <Link to="about">Read more <FaChevronCircleRight/></Link>
        </p>
      </div>
      <div>
        <img src={cover_image1} loading="lazy" className="image1" alt="a view of the restaurant"/>
        <img src={cover_image2} loading="lazy" className="image2" alt="a view of the restaurant"/>
      </div>
    </section>
  )
}

export default About