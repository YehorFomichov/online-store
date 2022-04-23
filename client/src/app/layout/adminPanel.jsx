import React, { useEffect, useState } from 'react'
import AdminList from '../components/ui/admin/adminList'
import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts, loadProducts } from '../store/products'
import { usePaginate } from '../hooks/usePaginate'
import UpdateForm from '../components/ui/admin/updateForm'
import CreateForm from '../components/ui/admin/createForm'
const AdminPanel = () => {
  const [selectedProduct, setSelectedProduct] = useState()
  const dispatch = useDispatch()
  const products = useSelector(getAllProducts())
  const productsCount = products ? products.length : 0
  const { paginateProducts } = usePaginate()
  useEffect(() => {
    dispatch(loadProducts())
  })
  const addToForm = (id) => {
    setSelectedProduct(id)
  }
  const resetForm = () => {
    setSelectedProduct()
  }
  const productsCrop = paginateProducts(products)
  return (
    <div className='container-fluid'>
      <div className='row'>
        {selectedProduct ? (
          <div className='col-2 border my-2 px-1'>
            <UpdateForm
              selectedProduct={selectedProduct}
              resetForm={resetForm}
            />
          </div>
        ) : (
          <div className='col-2 border my-2 px-1'>
            <CreateForm />
          </div>
        )}
        <div className='col-10 my-2'>
          <AdminList
            addToForm={addToForm}
            productsCount={productsCount}
            products={productsCrop}
          />
        </div>
      </div>
    </div>
  )
}

export default AdminPanel
