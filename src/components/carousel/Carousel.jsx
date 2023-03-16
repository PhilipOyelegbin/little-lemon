import { useState } from 'react';
import { Link } from 'react-router-dom';
import './carousel.css';

const Carousel = ({slides}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <figure>
      <img src={slides[currentIndex].cover_image} alt="" />
      <figcaption>
        <div>
          <h4>{slides[currentIndex].title}</h4>
          <h6>${slides[currentIndex].price}</h6>
        </div>
        <p>{slides[currentIndex].description}</p>
        <Link to="/">Order online</Link>
      </figcaption>
    </figure>
  )
}

export default Carousel