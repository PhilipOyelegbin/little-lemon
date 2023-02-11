import bruchetta from '../../../assets/bruchetta.svg';

const Testimonial = () => {
  const testimonials = [
    {avatar: bruchetta, profile: "Bruchetta", rating: "13.99", review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente nam itaque velit dolores quia facere delectus incidunt exercitationem odit iure"},
    {avatar: bruchetta, profile: "Bruchetta", rating: "13.99", review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente nam itaque velit dolores quia facere delectus incidunt exercitationem odit iure"},
    {avatar: bruchetta, profile: "Bruchetta", rating: "13.99", review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente nam itaque velit dolores quia facere delectus incidunt exercitationem odit iure"},
    {avatar: bruchetta, profile: "Bruchetta", rating: "13.99", review: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente nam itaque velit dolores quia facere delectus incidunt exercitationem odit iure"}
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