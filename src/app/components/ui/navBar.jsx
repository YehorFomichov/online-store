import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Divider from '../common/divider'

const NavBar = () => {
  const [isNavClosed, setIsNavClosed] = useState(false)
  const history = useHistory()
  const handleNavbarMove = () => {
    setIsNavClosed((prevState) => !prevState)
  }
  return (
    <>
      <nav className='navbar navbar-dark bg-dark'>
        {isNavClosed && (
          <div className='d-flex flex-column d-flex w-100 justify-content-between bg-dark p-2'>
            <h5 className='text-white h4'>WOMAN</h5>
            <Divider />
            <h6 className='text-muted' onClick={handleNavbarMove}>
              <Link to='/products/women/clothes'>CLOTHES</Link>
            </h6>
            <h6 className='text-muted' onClick={handleNavbarMove}>
              <Link to='/products/women/shoes'>SHOES</Link>
            </h6>
            <h6 className='text-muted' onClick={handleNavbarMove}>
              <Link to='/products/women/bags'>BAGS AND ACCESSORIES</Link>
            </h6>
            <h5 className='text-white h4'>MEN</h5>
            <Divider />
            <h6 className='text-muted'>CLOTHES</h6>
            <h6 className='text-muted'>SHOES AND ACCESSORIES</h6>
            <h6 className='text-muted'>UNDERWEAR</h6>
          </div>
        )}
        <div className='container-fluid'>
          <button className='navbar-toggler' onClick={handleNavbarMove}>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div>
            <button className='navbar-toggler' onClick={handleNavbarMove}>
              <i className='bi bi-search'></i>
            </button>
            <button className='navbar-toggler' onClick={handleNavbarMove}>
              <i className='bi bi-person-square'></i>
            </button>
            <button
              className='navbar-toggler'
              onClick={() => history.push('./basket')}
            >
              <i className='bi bi-cart'></i>
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar
