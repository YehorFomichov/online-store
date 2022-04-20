import React from 'react'
import { useSelector } from 'react-redux'
import { getCart } from '../../store/cart'
import CartElement from '../common/cartElement'

const Cart = () => {
  const cart = useSelector(getCart())
  console.log(cart)
  return (
    <div
      className='contaiter d-flex w-100 justify-content-center'
      style={{ height: '70vh' }}
    >
      <div className='row w-30' style={{ width: '70%', height: '100%' }}>
        {/* <Table /> */}
        {cart.map((e) => (
          <CartElement
            title={e.title}
            image={e.image}
            id={e._id}
            quontity={e.quontity}
            price={e.price}
          />
        ))}
      </div>
      <div>
        <div className='d-block p-2 m-2'>Total amount:</div>
        <button className='btn btn-primary'>Buy everything</button>
      </div>
    </div>
  )
}

export default Cart
