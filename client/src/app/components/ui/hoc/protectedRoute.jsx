import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import { getIsLoggedIn } from '../../store/users'
const ProtectedRoute = ({ component: Component, children, ...rest }) => {
  const isLoggedIn = useSelector(getIsLoggedIn())
  console.log(isLoggedIn)
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isLoggedIn) {
          return <Redirect to='/login' />
        }
        return Component ? <Component {...props} /> : children
      }}
    />
  )
}
ProtectedRoute.propTypes = {
  component: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
export default ProtectedRoute
