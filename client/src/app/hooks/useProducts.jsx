import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import productsService from '../services/products.service'
import PropTypes from 'prop-types'
const ProductsContext = React.createContext()

export const useProducts = () => {
  return useContext(ProductsContext)
}

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  useEffect(() => {
    getProducts()
  }, [])
  useEffect(() => {
    if (error !== null) {
      toast(error)
      setError(null)
    }
  }, [error])
  async function getProducts() {
    try {
      const content = await productsService.get()
      setProducts(content)
      setLoading(false)
    } catch (error) {
      errorCatcher(error)
    }
  }
  function errorCatcher(error) {
    const { message } = error.response.data
    setError(message)
    setLoading(false)
  }

  return (
    <ProductsContext.Provider value={{ products, isLoading }}>
      {children}
    </ProductsContext.Provider>
  )
}
ProductsProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}
export default ProductsProvider
