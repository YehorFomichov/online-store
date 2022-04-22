import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addProductToCart } from '../../../store/cart'
import { getProductById } from '../../../store/products'
import PathString from '../../common/pathString'
import SelectSize from '../../common/select/selectSize'

const ProductPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const dispatch = useDispatch()
  const [data, setData] = useState({})
  const params = useParams()
  const handleChange = (event) => {
    setData({ size: event.target.value })
  }
  const handleSubmit = () => {
    dispatch(
      addProductToCart({
        ...product,
        size: data.size ? data.size : 'default',
        quantity: 1
      })
    )
  }
  const { productId } = params
  const product = useSelector(getProductById(productId))
  if (product) {
    return (
      <div className='container p-3'>
        <h1>{product.title}</h1>
        <div className='row'>
          <PathString
            sex={product.sex}
            category={product.category}
            type={product.type}
          />
        </div>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <img src={product.image} className='img-fluid' />
          </div>
          <div className='col-12 col-md-6'>
            <SelectSize onChange={handleChange} />
            <div className='border d-flex align-items-center justify-content-between p-2'>
              <div className='px-2 mx-2'>
                <h3 className='text-danger' style={{ margin: 0 }}>
                  {product.price} ₴
                </h3>
              </div>
              <button className='btn btn-success' onClick={handleSubmit}>
                <i className='bi bi-cart-plus'></i> BUY
              </button>
            </div>
            <p className='py-4'>Description:</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              quam nisi, hendrerit sit amet nibh ut, rhoncus vehicula mauris.
              Integer tincidunt metus in libero mattis aliquet. Pellentesque
              augue leo, luctus eu tempus vel, aliquam at orci. Nam hendrerit
              faucibus nisi, vitae semper ex dictum ac. In hac habitasse platea
              dictumst. Proin sit amet nibh nisl.
            </p>
          </div>
        </div>
      </div>
    )
  } else
    return (
      <div className='spinner-border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    )
}

export default ProductPage
