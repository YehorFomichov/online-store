import React from 'react'
import './adminList.css'
import Pagination from '../common/pagination'
import { usePaginate } from '../../hooks/usePaginate'
const AdminList = () => {
  const {
    productsCrop: products,
    count,
    pageSize,
    currentPage,
    handlePageChange
  } = usePaginate()
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
              IMG
            </th>
            <th scope='col' className='col6'></th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product, index) => (
              <tr key={product._id}>
                <th scope='row'>{index + 1 + pageSize * (currentPage - 1)}</th>
                <td className='admin-row'>{product.title}</td>
                <td className='admin-row'>
                  {product.sex + '/' + product.category + '/' + product.type}
                </td>
                <td className='admin-row'>{product.price}</td>
                <td className='admin-row'></td>
                <td>
                  <div className='d-flex flex-row'>
                    <a className='text-white' href={product.image}>
                      <i class='bi bi-card-image p-0'></i>
                    </a>
                    <i className='bi bi-brush text-warning px-2'></i>
                    <i className='bi bi-file-earmark-x-fill text-danger px-1'></i>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Pagination
        itemsCount={count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

export default AdminList
