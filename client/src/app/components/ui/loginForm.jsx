import React, { useEffect, useState } from 'react'
import { validator } from '../../utils/validator'
import TextField from '../common/form/textField'
import CheckBoxField from '../common/form/checkBoxField'

import { useDispatch, useSelector } from 'react-redux'
import { getAuthError, logIn } from '../../store/users'
import history from '../../utils/history'

const LoginForm = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
    stayOn: false
  })
  // const loginError = useSelector(getAuthError())
  const [errors, setErrors] = useState({})
  const dispatch = useDispatch()
  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }))
  }
  const handleDemoLogin = () => {
    const redirect = history.location.state
      ? history.location.state.form.pathname
      : '/'
    dispatch(
      logIn({
        payload: {
          email: 'test@gmail.com',
          password: 'Test1234',
          stayOn: false
        },
        redirect
      })
    )
  }
  const validatorConfig = {
    email: {
      isRequired: {
        message: 'Электронная почта обязательна для заполнения'
      },
      isEmail: {
        message: 'Email введен некорректно'
      }
    },
    password: {
      isRequired: {
        message: 'Пароль обязателен для заполнения'
      },
      isCapitalSymbol: {
        message: 'Пароль должен содержать хотя бы одну заглавную букву'
      },
      isContainDigit: {
        message: 'Пароль должен содержать хотя бы одно число'
      },
      min: {
        message: 'Пароль должен состоять минимум из 8 символов',
        value: 8
      }
    }
  }
  useEffect(() => {
    validate()
  }, [data])
  const validate = () => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)
    return Object.keys(errors).length === 0
  }
  const isValid = Object.keys(errors).length === 0

  const handleSubmit = async (e) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return
    const redirect = history.location.state
      ? history.location.state.form.pathname
      : '/'
    dispatch(logIn({ payload: data, redirect }))
  }
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label='Электронная почта'
        name='email'
        value={data.email}
        onChange={handleChange}
        error={errors.email}
      />
      <TextField
        label='Пароль'
        type='password'
        name='password'
        value={data.password}
        onChange={handleChange}
        error={errors.password}
      />
      <CheckBoxField value={data.stayOn} onChange={handleChange} name='stayOn'>
        Оставаться в системе
      </CheckBoxField>
      {/* {loginError && <p className='text-danger'>{loginError}</p>} */}
      <button
        className='btn btn-primary w-100 mx-auto'
        type='submit'
        disabled={!isValid}
      >
        Login
      </button>
      <button
        className='btn btn-outline-success w-100 my-2 mx-auto'
        onClick={handleDemoLogin}
      >
        Demo Login
      </button>
    </form>
  )
}

export default LoginForm
