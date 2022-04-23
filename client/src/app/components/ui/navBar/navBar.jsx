import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useFilter } from '../../../hooks/useFilter'
import Divider from './divider'
import NH from './navBarHeader'
const NavBar = ({ onModalOpen }) => {
  const categories = {
    men: [
      { name: 'CLOTHES', path: '/products/women/clothes' },
      { name: 'SHOES', path: '/products/women/shoes' },
      { name: 'BAGS AND ACCESSORIES', path: '/products/women/bags' }
    ],
    women: [
      { name: 'CLOTHES', path: '/products/men/clothes' },
      { name: 'SHOES', path: '/products/men/shoes' },
      { name: 'BAGS AND ACCESSORIES', path: '/products/men/bags' }
    ]
  }
  const [navbarState, setNavbarState] = useState(false)
  const history = useHistory()
  const { removeFilters } = useFilter()
  const handleOpenNavbar = () => {
    setNavbarState((prevState) => !prevState)
    removeFilters()
  }
  const handleCategoryClick = (path) => {
    setNavbarState(false)
    removeFilters()
    history.push(path)
  }
  const handleRedirect = (path) => {
    setNavbarState(false)
    removeFilters()
    history.push(path)
  }
  return (
    <>
      <nav
        className='navbar navbar-dark bg-dark sticky-top'
        style={{ padding: '5px' }}
      >
        {navbarState && (
          <div className='d-flex flex-column d-flex w-100 justify-content-between bg-dark p-2'>
            <h5 className='text-white h4'>WOMAN</h5>
            <Divider />
            {categories.men.map((e) => (
              <NH
                handleCategoryClick={handleCategoryClick}
                name={e.name}
                path={e.path}
                key={e.path}
              />
            ))}
            <h5 className='text-white h4'>MEN</h5>
            <Divider />
            {categories.women.map((e) => (
              <NH
                handleCategoryClick={handleCategoryClick}
                name={e.name}
                path={e.path}
                key={e.path}
              />
            ))}
          </div>
        )}
        <div className='container-fluid'>
          <button className='navbar-toggler' onClick={handleOpenNavbar}>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div>
            <button
              className='navbar-toggler px-0'
              onClick={() => handleRedirect('/')}
            >
              <i className='bi bi-house'></i>
            </button>
            <button
              className='navbar-toggler px-0'
              onClick={() => handleRedirect('/login')}
            >
              <i className='bi bi-person-square'></i>
            </button>
            <button className='navbar-toggler px-0' onClick={onModalOpen}>
              <i className='bi bi-cart'></i>
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
