import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import RegisterForm from '../../components/ui/registerForm'
import LoginForm from '../../components/ui/loginForm'
import './login.css'
import { useSelector } from 'react-redux'
import { getIsLoggedIn } from '../../store/users'
import Profile from '../../components/pages/profile/profile'
const Login = () => {
  const { type } = useParams()
  const [formType, setFormType] = useState(type === 'register' ? type : 'login')
  const toggleFormType = () => {
    setFormType((prevState) =>
      prevState === 'register' ? 'login' : 'register'
    )
  }
  const currentLoginStatus = useSelector(getIsLoggedIn())
  return currentLoginStatus ? (
    <Profile />
  ) : (
    <div className='container-fluid mt-5'>
      <div className='row'>
        <div className='col-md-8 offset-md-2 shadow-white p-4 mb-4'>
          {formType === 'register' ? (
            <>
              <h3 className='mb-4'>Register</h3>
              <RegisterForm />
              <p>
                Already have account?{' '}
                <a role='button' onClick={toggleFormType}>
                  {' '}
                  Sign In
                </a>
              </p>
            </>
          ) : (
            <>
              <h3 className='mb-4'>Login</h3>
              <LoginForm />
              <p>
                Dont have account?{' '}
                <a role='button' onClick={toggleFormType}>
                  {' '}
                  Sign Up
                </a>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Login
