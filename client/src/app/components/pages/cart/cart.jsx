import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  decreaseProductQuantity,
  getCart,
  getTotalPrice,
  increaseProductQuantity,
  orderEverything,
  removeProductFromCart
} from '../../../store/cart'
import { getCurrentUserId } from '../../../store/users'
import './cart.css'
import { useHistory } from 'react-router-dom'

function Cart({ onModalOpen }) {
  const [locationKeys, setLocationKeys] = useState([])
  const history = useHistory()

  useEffect(() => {
    return history.listen((location) => {
      if (history.action === 'PUSH') {
        setLocationKeys([location.key])
      }
      if (history.action === 'POP') {
        if (locationKeys[1] === location.key) {
          setLocationKeys(([_, ...keys]) => keys)
          onModalOpen()
        } else {
          setLocationKeys((keys) => [location.key, ...keys])
          onModalOpen()
        }
      }
    })
  }, [locationKeys])
  const dispatch = useDispatch()
  const cart = useSelector(getCart())
  const totalPrice = useSelector(getTotalPrice())
  const handleDecrease = (id) => {
    dispatch(decreaseProductQuantity(id))
  }
  const handleIncrease = (id) => {
    dispatch(increaseProductQuantity(id))
  }
  const handleRemove = (id) => {
    dispatch(removeProductFromCart(id))
  }
  const currentUserId = useSelector(getCurrentUserId())
  const handleOrder = () => {
    dispatch(orderEverything(currentUserId, cart))
  }
  const handleRedirect = (id) => {
    history.push(`/product/${id}`)
    onModalOpen()
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
                  <li className='list-group-item' key={el._id + el.size}>
                    <div className='row'>
                      <div
                        className='col-md-2 col-sm-12 d-flex'
                        onClick={() => handleRedirect(el._id)}
                      >
                        <img src={el.image} className='img-thumbnail' />
                      </div>
                      <div className='col-md-5 d-flex flex-column justify-content-center'>
                        <h5 className='mt-2'>{el.title}</h5>
                        <div>Size: {el.size === 'default' ? 'M' : el.size}</div>
                      </div>
                      <div className='col-md-3 d-flex justify-content-center align-items-center'>
                        <button
                          className='btn btn-primary mx-3'
                          onClick={() => handleDecrease(el._id)}
                        >
                          -
                        </button>
                        <h5 className='mt-2'>{el.quantity}</h5>
                        <button
                          className='btn btn-primary mx-3'
                          onClick={() => handleIncrease(el._id)}
                        >
                          +
                        </button>
                      </div>
                      <div className='col-md-2 d-flex flex-column justify-content-center align-items-center'>
                        <h5 className='mt-2'>
                          {`${Number(el.price) * Number(el.quantity)} UAH`}
                        </h5>
                        <button
                          className='btn btn-success'
                          onClick={() => handleRemove(el._id)}
                        >
                          <i className='bi bi-trash3 p-0'></i> Remove
                        </button>
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
                  onClick={handleOrder}
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

export default Cart
