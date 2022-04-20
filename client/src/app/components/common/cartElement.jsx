import React from 'react'

const cartElement = ({ image, title, quontity, price, id }) => {
  return (
    <div className='d-flex' key={id}>
      <div className='d-inline-block p-2 m-2 col'>
        <img className='img-thumbnail' src={image} />
      </div>
      <div className='d-inline-block p-2 m-2 col'>{title}</div>
      <div className='d-inline-block p-2 m-2 col'>{quontity}</div>
      <div className='d-inline-block p-2 m-2 col'>{price}</div>
    </div>
  )
}

export default cartElement
