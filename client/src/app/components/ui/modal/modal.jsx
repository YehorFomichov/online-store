import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  decreaseProductQuantity,
  getCart,
  getTotalPrice,
  increaseProductQuantity
} from '../../../store/cart'
import './modal.css'

function Modal({ onModalOpen }) {
  const dispatch = useDispatch()
  const cart = useSelector(getCart())
  const totalPrice = useSelector(getTotalPrice())
  const handleDecrease = (id) => {
    dispatch(decreaseProductQuantity(id))
  }
  const handleIncrease = (id) => {
    dispatch(increaseProductQuantity(id))
  }
  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className='close-header'>
          <h2 className='m-2 text-black'>Cart</h2>
          <button className='btn btn-secondary' onClick={onModalOpen}>
            <i className='bi bi-x-lg'></i>
          </button>
        </div>
        <div className='content'>
          <div className='cart-container'>
            <ul className='list-group'>
              {cart &&
                cart.map((el) => (
                  <li className='list-group-item' key={el._id}>
                    <div className='row'>
                      <div className='col-md-2 col-sm-12 d-flex'>
                        <img src={el.image} className='img-thumbnail' />
                      </div>
                      <div className='col-md-5 d-flex align-items-center'>
                        <h5 className='mt-2'>{el.title}</h5>
                      </div>
                      <div className='col-md-3 d-flex justify-content-center align-items-center'>
                        <button
                          className='btn btn-primary mx-3'
                          onClick={() => handleDecrease(el._id)}
                        >
                          -
                        </button>
                        <h5 className='mt-2'>{el.quontity}</h5>
                        <button
                          className='btn btn-primary mx-3'
                          onClick={() => handleIncrease(el._id)}
                        >
                          +
                        </button>
                      </div>
                      <div className='col-md-2 d-flex justify-content-center align-items-center'>
                        <h5 className='mt-2'>
                          {`${Number(el.price) * Number(el.quontity)} UAH`}
                        </h5>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
            {cart.length > 0 ? (
              <div className='footer-modal'>
                <div className='cart-total'>
                  <h4 className='mt-4'>{`${totalPrice} UAH`}</h4>
                </div>
                <button
                  className='btn btn-primary btn-lg'
                  data-element='orderBtn'
                >
                  Order everything
                </button>
              </div>
            ) : (
              <div className='footer-modal'>
                <div className='cart-total'>
                  <h4 className='mt-4'>Cart is empty</h4>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
