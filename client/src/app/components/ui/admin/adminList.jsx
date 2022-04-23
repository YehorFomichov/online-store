import React from 'react'
import './adminList.css'
import Pagination from '../../common/pagination'
import { usePaginate } from '../../../hooks/usePaginate'
const AdminList = ({ products, productsCount, addToForm }) => {
  const { pageSize, currentPage, handlePageChange } = usePaginate()
  return (
    <div>
      <table className='table table-sm table-light'>
        <thead>
          <tr>
            <th scope='col' className='col1'>
              #
            </th>
            <th scope='col' className='col2'>
              Name
            </th>
            <th scope='col' className='col3'>
              Category
            </th>
            <th scope='col' className='col4'>
              Price
            </th>
            <th scope='col' className='col4'>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product, index) => (
              <tr key={product._id}>
                <th scope='row' className='admin-row'>
                  {index + 1 + pageSize * (currentPage - 1)}
                </th>
                <td className='admin-row'>{product.title}</td>
                <td className='admin-row'>
                  {product.sex + '/' + product.category + '/' + product.type}
                </td>
                <td className='admin-row'>
                  <b>{product.price}</b>
                </td>
                <td>
                  <div className='d-flex flex-row'>
                    <i
                      className='bi bi-download px-2'
                      onClick={() => addToForm(product)}
                    ></i>
                    <a className='text-white' href={product.image}>
                      <i className='bi bi-card-image text-black px-2'></i>
                    </a>
                    <i className='bi bi-brush text-warning px-2'></i>
                    <i className='bi bi-file-earmark-x-fill text-danger px-2'></i>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Pagination
        itemsCount={productsCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

export default AdminList
