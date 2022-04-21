import React, { useEffect, useState, useRef } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'
import img1 from '../../assets/mainPage/men.jpg'
import img2 from '../../assets/mainPage/men2.jpg'
import img3 from '../../assets/mainPage/men3.jpg'
import l1 from '../../assets/mainPage/women.jpg'
import l2 from '../../assets/mainPage/women2.jpg'
import l3 from '../../assets/mainPage/women3.jpg'
import './main.css'

const Main = () => {
  const menImages = [img1, img2, img3]
  const womenImages = [l1, l2, l3]
  const [index, setIndex] = useState(0)
  const timeoutRef = useRef(null)
  const history = useHistory()
  const handleRedirect = (path) => {
    history.push(path)
  }
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }
  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === menImages.length - 1 ? 0 : prevIndex + 1
        ),
      2500
    )
    return () => {
      resetTimeout()
    }
  }, [index])

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div
          className='col-xs-12 col-md-6 my-2
        d-flex justify-content-center align-items-center'
          onClick={() => handleRedirect('/products/men')}
        >
          <h1 className='img-text'>MEN COLLECTION</h1>
          <img className='img-main' src={menImages[index]} alt='' />
        </div>
        <div
          className='col-xs-12 col-md-6 my-2
        d-flex justify-content-center align-items-center'
          onClick={() => handleRedirect('/products/women')}
        >
          <h1 className='img-text'>WOMEN COLLECTION</h1>
          <img className='img-main' src={womenImages[index]} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Main
