import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
const FilterContext = React.createContext()

export const useFilter = () => {
  return useContext(FilterContext)
}

const FilterProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const handleSearchQuery = ({ target }) => {
    setSearchQuery(target.value)
    setMaxPrice(10000)
    setMinPrice(0)
  }
  const removeFilters = () => {
    setMaxPrice(10000)
    setMinPrice(0)
    setSearchQuery('')
  }
  const [maxPrice, setMaxPrice] = useState(10000)
  const [minPrice, setMinPrice] = useState(0)
  const handleChangePrice = (event) => {
    setSearchQuery('')
    if (event.target.name === 'min') {
      const value = Math.min(+event.target.value, maxPrice - 1)
      setMinPrice(value)
    }
    if (event.target.name === 'max') {
      const value = Math.max(+event.target.value, minPrice + 1)
      setMaxPrice(value)
    }
  }
  function filterProducts(data) {
    const filteredProducts = searchQuery
      ? data.filter(
          (product) =>
            product.title.toLowerCase().indexOf(searchQuery.toLowerCase()) !==
            -1
        )
      : maxPrice !== 0 && minPrice !== 100000
      ? data.filter(
          (product) => product.price < maxPrice && product.price > minPrice
        )
      : data
    return filteredProducts
  }
  return (
    <FilterContext.Provider
      value={{
        filterProducts,
        maxPrice,
        minPrice,
        handleChangePrice,
        handleSearchQuery,
        searchQuery,
        removeFilters
      }}
    >
      {children}
    </FilterContext.Provider>
  )
}
FilterProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
export default FilterProvider
