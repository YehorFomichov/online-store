import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { paginate } from '../utils/paginate'
const PaginateContext = React.createContext()

export const usePaginate = () => {
  return useContext(PaginateContext)
}
const PaginateProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 14
  function paginateProducts(products) {
    return paginate(products, currentPage, pageSize)
  }
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }
  return (
    <PaginateContext.Provider
      value={{ currentPage, paginateProducts, pageSize, handlePageChange }}
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
