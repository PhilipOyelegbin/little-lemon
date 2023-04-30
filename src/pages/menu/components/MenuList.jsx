import { FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const MenuList = ({state}) => {
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
                <Link to="/">Order a delivery <FaShoppingCart/></Link>
                </figcaption>
            </figure>
        )
    }

  return (
    <section>
        {!state ? <h5 className='error-msg'>Unable to load reservation, try again later!</h5> : state.length <= 0 && <h5 className='error-msg'>Menu is not available</h5>}

        <div className='specials-content'>
            {state.length > 0 && state?.map((menu, index) => (
                <MenuCard key={index} cover_image={menu.cover_image} title={menu.name} price={menu.price} description={menu.description}/>
            ))}
        </div>
    </section>
  )
}

export default MenuList