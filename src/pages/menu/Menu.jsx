import { Suspense, lazy, useEffect, useReducer, useState } from 'react';
import { actions, initialState, menuReducer } from '../../reducers/menuReducer';
import Hero from './components/Hero';
import './menu.css';
import { FaChevronDown } from 'react-icons/fa';

const MenuList = lazy(() => import('./components/MenuList'));

const Menu = () => {
  const [filterBtn, setFilterBtn] = useState(true)
  const [state, dispatch] = useReducer(menuReducer, initialState);

  async function getAllMenu() {
    await fetch(`${process.env.REACT_APP_API_URL}/menu`)
      .then(resp => resp.json())
      .then(data => dispatch({type: actions.getAllMenu, payload: data}))
  }

  async function getFilteredMenu(category) {
    await fetch(`${process.env.REACT_APP_API_URL}/menu`)
      .then(resp => resp.json())
      .then(data => {
        const filtered = data?.filter(currentMenu => {return currentMenu.category === category})
        dispatch({type: actions.getFilteredMenu, payload: filtered})
      })
  }

  useEffect(() => {
    getAllMenu()
  }, [])

  return (
    <>
      <Hero/>

      <section className='menu-section'>
        <div className='filter-control'>
          <button onClick={() => setFilterBtn(prev => !prev)}>Filter <FaChevronDown/></button>
          <ul className={`${filterBtn ? "hide-filter-list" : "show-filter-list"}`}>
            <li onClick={() => getAllMenu()}>All</li>
            <li onClick={() => getFilteredMenu("foreign-delicacy")}>Foreign delicacy</li>
            <li onClick={() => getFilteredMenu("drinks")}>Drinks</li>
          </ul>
        </div>

        <Suspense fallback={<h5 className='loading-msg'>Loading menu data...</h5>}>
          <MenuList state={state}/>
        </Suspense>
      </section>
    </>
  )
}

export default Menu