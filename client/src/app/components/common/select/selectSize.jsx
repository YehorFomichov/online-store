import React from 'react'
import './selectSize.css'
const SelectSize = ({ onChange }) => {
  return (
    <div className='d-flex flex-row align-items-center py-3'>
      <input
        className='checkbox-size'
        type='radio'
        name='tools'
        id='tool-1'
        value='XS'
        onChange={onChange}
      />
      <label className='for-checkbox-size' htmlFor='tool-1'>
        XS
      </label>
      <input
        className='checkbox-size'
        type='radio'
        name='tools'
        id='tool-2'
        value='S'
        onChange={onChange}
      />
      <label className='for-checkbox-size' htmlFor='tool-2'>
        S
      </label>
      <input
        className='checkbox-size'
        type='radio'
        name='tools'
        id='tool-3'
        value='M'
        onChange={onChange}
      />
      <label className='for-checkbox-size' htmlFor='tool-3'>
        M
      </label>
      <input
        className='checkbox-size'
        type='radio'
        name='tools'
        id='tool-4'
        value='L'
        onChange={onChange}
      />
      <label className='for-checkbox-size' htmlFor='tool-4'>
        L
      </label>
      <input
        className='checkbox-size'
        type='radio'
        name='tools'
        id='tool-5'
        value='XL'
        onChange={onChange}
      />
      <label className='for-checkbox-size' htmlFor='tool-5'>
        XL
      </label>
      <input
        className='checkbox-size'
        type='radio'
        name='tools'
        id='tool-6'
        value='XXL'
        onChange={onChange}
      />
      <label className='for-checkbox-size' htmlFor='tool-6'>
        XXL
      </label>
    </div>
  )
}

export default SelectSize
