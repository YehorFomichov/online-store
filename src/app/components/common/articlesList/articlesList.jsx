import { nanoid } from 'nanoid'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProducts, getProductsLoadingStatus } from '../../../store/products'
const ArticlesList = () => {
  const params = useParams()
  const { sex, category, type } = params
  const [positionState, changePositionState] = useState()
  const isLoading = useSelector(getProductsLoadingStatus())
  const products = useSelector(getProducts({ sex, category }))
  const arrayToShow = []
  Object.keys(products).forEach((el) => {
    Object.keys(products[el]).forEach((cl) => {
      arrayToShow.push(products[el][cl])
    })
  })

  return (
    <>
      <div className='row'>
        <div className='col-4 d-flex justify-content-start align-items-center'>
          Filters
        </div>
        <div className='col-4 d-flex justify-content-center align-items-center'>
          Products
        </div>
        <div className='col-4 d-flex justify-content-end align-items-center'>
          <button className='btn' onClick={() => changePositionState(4)}>
            <i className='bi bi-grid-3x3-gap-fill img-fluid'></i>
          </button>
          <button className='btn'>
            <i
              className='bi bi-grid-fill'
              onClick={() => changePositionState(6)}
            ></i>
          </button>
          <button className='btn'>
            <i
              className='bi bi-justify'
              onClick={() => changePositionState(12)}
            ></i>
          </button>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          {!isLoading &&
            arrayToShow.map((e) => (
              <div
                key={nanoid()}
                className={
                  positionState
                    ? `col-${positionState}`
                    : 'col-xxl-3 col-lg-4 col-6'
                }
              >
                <div
                  className='row'
                  style={{
                    maxHeight: '480px',
                    overflow: 'hidden'
                  }}
                >
                  <img className='img-fluid m-2 p-2' src={e.image}></img>
                </div>
                <div className='row m-2 p-2'>
                  <p>{e.title}</p>
                  <p className=''>{e.price}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default ArticlesList
