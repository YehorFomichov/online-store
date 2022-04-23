import React, { useEffect } from 'react'
import AdminForm from '../components/ui/adminForm'
import AdminList from '../components/ui/adminList'
import { useSelector, useDispatch } from 'react-redux'
import { getCurrentUserId, loadUser } from '../store/users'
const AdminPanel = () => {
  const dispatch = useDispatch()
  const currentUserId = useSelector(getCurrentUserId())
  useEffect(() => {
    dispatch(loadUser(currentUserId))
  })
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-2 border my-2 px-1'>
          <AdminForm />
        </div>
        <div className='col-10 my-2'>
          <AdminList />
        </div>
      </div>
    </div>
  )
}

export default AdminPanel
