import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import ProductCard from '../productCard/productCard'
import {
  getProductsLoadingStatus,
  getProuctsByType,
  loadProducts
} from '../../../store/products'
import FiltersPanel from '../../ui/filtersPanel'
import { useFilter } from '../../../hooks/useFilter'

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
  const { filterProducts, handleSearchQuery, searchQuery } = useFilter()
  const filteredProducts = filterProducts(products)
  return (
    <>
      <div className='row mb-2'>
        <div className='col-2 d-flex justify-content-start align-items-center'>
          <FiltersPanel />
        </div>
        <div className='col-8 d-flex justify-content-center align-items-center'>
          <input
            className='form-control me-sm-2 row bg-light'
            type='text'
            name='searchQuery'
            placeholder='Search...'
            onChange={handleSearchQuery}
            value={searchQuery}
          />
        </div>
        <div className='col-2 d-flex justify-content-end align-items-center'>
          <button className='btn'>
            <i
              className='bi bi-grid-fill bi-white text-muted'
              onClick={() => changePositionState(6)}
            ></i>
          </button>
          <button className='btn'>
            <i
              className='bi bi-justify text-muted'
              onClick={() => changePositionState(12)}
            ></i>
          </button>
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          {!isLoading &&
            filteredProducts.map((e) => (
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
