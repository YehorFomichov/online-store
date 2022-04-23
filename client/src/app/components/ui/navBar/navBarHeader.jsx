import React from 'react'

const NavBarHeader = ({ name, path, handleCategoryClick }) => {
  return (
    <h6 className='text-muted' onClick={() => handleCategoryClick(path)}>
      {name}
    </h6>
  )
}

export default NavBarHeader
