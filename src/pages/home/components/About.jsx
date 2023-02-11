import cover_image1 from '../../../assets/Mario and Adrian A.jpg';
import cover_image2 from '../../../assets/Mario and Adrian b.jpg';

const About = () => {
  return (
    <section className='about-section'>
      <div>
        <h1>Little Lemon</h1>
        <h4>Chicago</h4>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, expedita harum in hic aliquam veritatis? Deleniti quia consequuntur tempore aspernatur nulla autem labore asperiores ipsum excepturi accusantium quibusdam molestias sit, libero rerum quisquam, sunt, atque mollitia?</p>
      </div>
      <div>
        <img src={cover_image1} className="image1" alt="a view of the restaurant"/>
        <img src={cover_image2} className="image2" alt="a view of the restaurant"/>
      </div>
    </section>
  )
}

export default About