import { Link } from 'react-router-dom';
import { InternalLinkBtn } from '../../../components/cta/Cta';
import bruchetta from '../../../assets/bruchetta.svg';
import lemon_dessert from '../../../assets/lemon dessert.jpg';
import greek_salad from '../../../assets/greek salad.jpg';

const Specials = () => {
    const menu = [
        {cover_image: bruchetta, title: "Bruchetta", price: "13.99", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente nam itaque velit dolores quia facere delectus incidunt exercitationem odit iure"},
        {cover_image: lemon_dessert, title: "Lemon dessert", price: "13.99", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente nam itaque velit dolores quia facere delectus incidunt exercitationem odit iure"},
        {cover_image: greek_salad, title: "Greek Salad", price: "13.99", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente nam itaque velit dolores quia facere delectus incidunt exercitationem odit iure"}
    ]

    function MenuCard({cover_image, title, price, description}) {
        return (
            <figure className='specials'>
                <img src={cover_image} loading="lazy" alt="" />
                <figcaption>
                <div>
                    <h4>{title}</h4>
                    <h6>${price}</h6>
                </div>
                <p>{description}</p>
                <Link to="/">Order menu</Link>
                </figcaption>
            </figure>
        )
    }

  return (
    <section className='specials-section'>
        <div className='specials-header'>
            <h2>This weeks specials!</h2>
            <InternalLinkBtn url="/order-online" label="Online Menu"/>
        </div>
        <div className='specials-content'>
            {menu?.map((menu, index) => (
                <MenuCard key={index} cover_image={menu.cover_image} title={menu.title} price={menu.price} description={menu.description}/>
            ))}
        </div>
    </section>
  )
}

export default Specials