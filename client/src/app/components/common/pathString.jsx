import React from 'react'
import { useHistory } from 'react-router-dom'

const PathString = ({ sex, category, type }) => {
  const history = useHistory()
  const handlePathChange = (path) => {
    if (path === 'sex') {
      history.push(`/products/${sex}`)
    } else if (path === 'category') {
      history.push(`/products/${sex}/${category}`)
    } else {
      history.push(`/products/${sex}/${category}/${type}`)
    }
  }
  const Arrow = () => <i className='bi bi-chevron-compact-right p-0 m-2'></i>
  const Home = () => <i className='bi bi-house p-0'></i>
  return (
    <div className='d-flex flex-row justify-content-start align-items-center'>
      <Home />
      <Arrow />
      <div onClick={() => handlePathChange('sex')}>{sex}</div>
      <Arrow />
      <div onClick={() => handlePathChange('category')}>{category}</div>
      <Arrow />
      <div onClick={() => handlePathChange('type')}>{type}</div>
    </div>
  )
}

export default PathString
