import React from 'react'
import BasketElement from '../common/basketElement'
// import Table from '../common/table/index'

const Basket = () => {
  const columns = {
    image: {
      path: 'image'
      // component: (user) => <Link to={`/users/${user._id}`}>{user.name}</Link>
    },
    name: {
      path: 'name',
      name: 'Name of product'
      // component: (user) => <Qualities qualities={user.qualities} />
    },
    quantity: {
      path: 'quantity',
      name: 'Quantity'
      // component: (user) => <Profession id={user.profession} />
    },
    price: {
      path: 'price',
      name: 'Total price'
    }
    // ,
    // delete: {
    //   component: (user) => (
    //     <button onClick={() => onDelete(user._id)} className='btn btn-danger'>
    //       delete
    //     </button>
    //   )
    // }
  }
  console.log('what to do next?', columns)
  return (
    <div
      className='contaiter d-flex w-100 justify-content-center'
      style={{ height: '70vh' }}
    >
      <div className='row w-30' style={{ width: '70%', height: '100%' }}>
        {/* <Table /> */}
        <BasketElement />
        <BasketElement />
        <BasketElement />
      </div>
      <div>
        <div className='d-block p-2 m-2'>Total amount:</div>
        <button className='btn btn-primary'>Buy everything</button>
      </div>
    </div>
  )
}

export default Basket
