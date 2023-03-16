import cover_image1 from '../../../assets/Mario and Adrian A.jpg';
import cover_image2 from '../../../assets/Mario and Adrian b.jpg';

const About = () => {
  return (
    <section className='about-section'>
      <div>
        <h1>Little Lemon</h1>
        <h4>Chicago</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sed molestias cumque illo ipsam quas quisquam, est animi, deserunt, magnam libero eum sint corrupti eaque voluptas. Distinctio quidem quisquam dolor quos, in nihil iusto ullam harum omnis alias doloremque, maxime autem eligendi mollitia temporibus voluptate consectetur obcaecati amet sapiente incidunt!</p>
      </div>
      <div>
        <img src={cover_image1} loading="lazy" className="image1" alt="a view of the restaurant"/>
        <img src={cover_image2} loading="lazy" className="image2" alt="a view of the restaurant"/>
      </div>
    </section>
  )
}

export default About