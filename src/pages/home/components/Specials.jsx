import { InternalLinkBtn } from '../../../components/cta/Cta';
import bruchetta from '../../../assets/bruchetta.svg';
import { Link } from 'react-router-dom';

const Specials = () => {
    const menu = [
        {cover_image: bruchetta, title: "Bruchetta", price: "13.99", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente nam itaque velit dolores quia facere delectus incidunt exercitationem odit iure"},
        {cover_image: bruchetta, title: "Bruchetta", price: "13.99", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente nam itaque velit dolores quia facere delectus incidunt exercitationem odit iure"},
        {cover_image: bruchetta, title: "Bruchetta", price: "13.99", description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente nam itaque velit dolores quia facere delectus incidunt exercitationem odit iure"}
    ]

    function MenuCard({cover_image, title, price, description}) {
        return (
            <figure className='specials'>
                <img src={cover_image} alt="" />
                <figcaption>
                    <div>
                        <h4>{title}</h4>
                        <h6>${price}</h6>
                    </div>
                    <p>{description}</p>
                    <Link to="/">Order online</Link>
                </figcaption>
            </figure>
        )
    }

  return (
    <section className='specials-section'>
        <div>
            <h2>Specials</h2>
            <InternalLinkBtn url="/order-online" label="Order online"/>
        </div>
        <div className='specials-container'>
            {menu?.map((menu, index) => (
                <MenuCard key={index} cover_image={menu.cover_image} title={menu.title} price={menu.price} description={menu.description}/>
            ))}
        </div>
    </section>
  )
}

export default Specials