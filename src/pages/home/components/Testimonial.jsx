import persona1 from '../../../assets/persona1.png';

const Testimonial = () => {
  const testimonials = [
    {avatar: persona1, profile: "Neymar", rating: "4.3", review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente nam itaque velit dolores quia facere delectus incidunt exercitationem odit iure"},
    {avatar: persona1, profile: "Messi", rating: "5.0", review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente nam itaque velit dolores quia facere delectus incidunt exercitationem odit iure"},
    {avatar: persona1, profile: "Ronaldo", rating: "4.0", review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente nam itaque velit dolores quia facere delectus incidunt exercitationem odit iure"},
    {avatar: persona1, profile: "Okocha", rating: "4.7", review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente nam itaque velit dolores quia facere delectus incidunt exercitationem odit iure"}
  ]

  function TestimonialCard({avatar, profile, ratings, review}) {
    return (
      <div className='testimonials'>
        <h5>{ratings}</h5>
        <div>
          <img src={avatar} alt="" />
          <p>{profile}</p>
        </div>
        <p>{review}</p>
      </div>
    )
  }

  return (
    <section className='testimonials-section'>
      <h2>Testimonials</h2>
      <div className='testimonials-container'>
        {testimonials?.map((testimony, index) => (
          <TestimonialCard key={index} avatar={testimony.avatar} profile={testimony.profile} ratings={testimony.rating} review={testimony.review}/>
        ))}
      </div>
    </section>
  )
}

export default Testimonial