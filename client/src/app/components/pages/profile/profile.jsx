import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { getOrders, loadOrdersByUserId } from '../../../store/cart'
import {
  getCurrentUserId,
  getIsAdmin,
  loadUser,
  logOut
} from '../../../store/users'
import { displayDate } from '../../../utils/displayDate'

const Profile = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const currentUserId = useSelector(getCurrentUserId())
  const currentOrders = useSelector(getOrders())
  useEffect(() => {
    dispatch(loadOrdersByUserId(currentUserId))
    dispatch(loadUser(currentUserId))
  }, [])
  const isAdmin = useSelector(getIsAdmin())
  const handleLogOut = () => {
    dispatch(logOut())
    history.goBack()
  }
  const calculateSum = (orders) => {
    let sum = 0
    for (const order of orders) {
      sum += order.price * order.quantity
    }
    return sum
  }
  return (
    <div className='container my-4'>
      <h3>Your current orders:</h3>
      <table className='table table-dark table-bordered'>
        <thead>
          <tr>
            <th scope='col'>Order number</th>
            <th scope='col'>Order date</th>
            <th scope='col'>Total price</th>
          </tr>
        </thead>
        <tbody>
          {currentOrders &&
            currentOrders.map((e) => (
              <tr key={e._id}>
                <td>{e._id.slice(18, 26)}</td>
                <td>{displayDate(e.createdAt)}</td>
                <td>{calculateSum(e.orders)} UAH</td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className='row'>
        {isAdmin && (
          <button
            className='btn btn-light m-2'
            onClick={() => history.push('/admin')}
          >
            Admin Page
          </button>
        )}
        <button className='btn btn-light m-2' onClick={handleLogOut}>
          LogOut
        </button>
      </div>
    </div>
  )
}

export default Profile
