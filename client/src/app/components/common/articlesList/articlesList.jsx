import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import ProductCard from '../productCard/productCard'
import {
  getProductsLoadingStatus,
  getProuctsByType,
  loadProducts
} from '../../../store/products'

const ArticlesList = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(loadProducts())
  }, [])
  const params = useParams()
  const { sex, category, type } = params
  const [positionState, changePositionState] = useState()
  const isLoading = useSelector(getProductsLoadingStatus())
  const products = useSelector(getProuctsByType(sex, category, type))
  const handleCardClick = (id) => {
    history.push(`/product/${id}`)
  }
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
            products.map((e) => (
              <div
                key={e._id}
                className={
                  positionState
                    ? `col-${positionState}`
                    : 'col-xxl-3 col-lg-4 col-sm-6 col-xs-12'
                }
                onClick={() => handleCardClick(e._id)}
              >
                <ProductCard image={e.image} title={e.title} price={e.price} />
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default ArticlesList
