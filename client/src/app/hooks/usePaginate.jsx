import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { paginate } from '../utils/paginate'
import { getAllProducts, loadProducts } from '../store/products'
const PaginateContext = React.createContext()

export const usePaginate = () => {
  return useContext(PaginateContext)
}
const PaginateProvider = ({ children }) => {
  const dispatch = useDispatch()
  const products = useSelector(getAllProducts())
  useEffect(() => {
    dispatch(loadProducts())
  }, [])
  const count = products.length
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 14
  const productsCrop = paginate(products, currentPage, pageSize)
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }
  return (
    <PaginateContext.Provider
      value={{ currentPage, productsCrop, pageSize, count, handlePageChange }}
    >
      {children}
    </PaginateContext.Provider>
  )
}
PaginateProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
export default PaginateProvider
