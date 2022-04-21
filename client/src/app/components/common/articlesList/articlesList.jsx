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
  const isLoading = useSelector(getProductsLoadingStatus())
  const products = useSelector(getProuctsByType(sex, category, type))
  const handleCardClick = (id) => {
    history.push(`/product/${id}`)
  }
  const { filterProducts, handleSearchQuery, searchQuery } = useFilter()
  const filteredProducts = filterProducts(products)
  return (
    <>
      <div className='container-fluid d-flex flex-row justify-content-between align-items-center'>
        <div>
          <FiltersPanel />
        </div>
        <div className='w-100'>
          <input
            className='form-control me-sm-2 row bg-light'
            type='text'
            name='searchQuery'
            placeholder='Search...'
            onChange={handleSearchQuery}
            value={searchQuery}
          />
        </div>
      </div>
      <div className='container-fluid'>
        <div className='row'>
          {!isLoading &&
            filteredProducts.map((e) => (
              <div
                key={e._id}
                className='col-xxl-3 col-lg-4 col-sm-6 col-xs-12'
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
