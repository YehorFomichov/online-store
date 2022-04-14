import React, { useEffect, useState, useRef } from 'react'
import img1 from '../../assets/mainPage/p1.jpg'
import img2 from '../../assets/mainPage/p2.jpg'
import img3 from '../../assets/mainPage/p3.jpg'
import l1 from '../../assets/mainPage/l1.jpg'
import l2 from '../../assets/mainPage/l2.jpg'
import l3 from '../../assets/mainPage/l3.jpg'
import './main.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts, loadProducts } from '../../store/products'

const Main = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadProducts({ sex: 'men', category: 'clothes' }))
  }, [])
  // const products = useSelector(getAllProducts())
  // console.log(products)
  const slides = [img1, img2, img3]
  const altSlides = [l1, l2, l3]
  const [index, setIndex] = useState(0)
  const timeoutRef = useRef(null)
  const { innerWidth: width } = window
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
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      2500
    )
    return () => {
      resetTimeout()
    }
  }, [index, slides.length])

  return (
    <div className='slideshow'>
      <div
        className='slideshowSlider'
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {slides.map((img, index) => (
          <div className='slide justify-content-between' key={index}>
            <img
              src={img}
              className={width > 1500 ? 'px-5' : undefined}
              alt=''
            />
            {width > 1200 && (
              <img
                src={altSlides[index]}
                className={width > 1500 ? 'px-5' : undefined}
                alt=''
              />
            )}
          </div>
        ))}
      </div>

      <div className='slideshowDots m-4'>
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? ' active' : ''}`}
            onClick={() => {
              setIndex(idx)
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default Main
