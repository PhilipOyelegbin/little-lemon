import { useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { actions, initialState, menuReducer } from '../../../reducers/menuReducer';
import { InternalLinkBtn } from '../../../components/cta/Cta';

const Specials = () => {
    const [state, dispatch] = useReducer(menuReducer, initialState)

    async function getMenu() {
        await fetch(`${process.env.REACT_APP_API_URL}/menu`)
          .then(resp => resp.json())
          .then(data => dispatch({type: actions.getAllMenu, payload: data}))
    }

    useEffect(() => {
        getMenu()
    }, [])

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
    <section className='specials-section'>
        <div className='specials-header'>
            <h2>This weeks specials!</h2>
            <InternalLinkBtn url="/menu" label="Online Menu"/>
        </div>

        {!state ? <h5 className='error-msg'>Unable to load reservation, try again later!</h5> : state.length <= 0 && <h5 className='error-msg'>Menu is not available</h5>}

        <div className='specials-content'>
            {state.length > 0 && state?.map((menu, index) => (
                <MenuCard key={index} cover_image={menu.cover_image} title={menu.name} price={menu.price} description={menu.description}/>
            ))}
        </div>
    </section>
  )
}

export default Specials