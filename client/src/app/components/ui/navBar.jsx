import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useFilter } from '../../hooks/useFilter'
import Divider from '../common/divider'
const NavBar = ({ onModalOpen }) => {
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
            <h6
              className='text-muted'
              onClick={() => handleCategoryClick('/products/women/clothes')}
            >
              CLOTHES
            </h6>
            <h6
              className='text-muted'
              onClick={() => handleCategoryClick('/products/women/shoes')}
            >
              SHOES
            </h6>
            <h6
              className='text-muted'
              onClick={() => handleCategoryClick('/products/women/bags')}
            >
              BAGS AND ACCESSORIES
            </h6>
            <h5 className='text-white h4'>MEN</h5>
            <Divider />
            <h6
              className='text-muted'
              onClick={() => handleCategoryClick('/products/men/clothes')}
            >
              CLOTHES
            </h6>
            <h6
              className='text-muted'
              onClick={() => handleCategoryClick('/products/men/shoes')}
            >
              SHOES
            </h6>
            <h6
              className='text-muted'
              onClick={() => handleCategoryClick('/products/men/bags')}
            >
              BAGS AND ACCESSORIES
            </h6>
          </div>
        )}
        <div className='container-fluid'>
          <button className='navbar-toggler' onClick={handleOpenNavbar}>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div>
            <button
              className='navbar-toggler'
              onClick={() => handleRedirect('/')}
            >
              <i className='bi bi-house'></i>
            </button>
            <button
              className='navbar-toggler'
              onClick={() => handleRedirect('/login')}
            >
              <i className='bi bi-person-square'></i>
            </button>
            <button className='navbar-toggler' onClick={onModalOpen}>
              <i className='bi bi-cart'></i>
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
