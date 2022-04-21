import React from 'react'
import './productCard.css'
const ProductCard = ({ image, title, price }) => {
  return (
    <div className='card-wrapper'>
      <div
        className='card-image'
        style={{ backgroundImage: `url("${image}")` }}
      ></div>
      <div className='row m-2 p-2'>
        <p className='text-secondary'>{title}</p>
        <h5 className='text-black'>{price} ₴</h5>
      </div>
    </div>
  )
}

export default ProductCard
