import React from 'react'

const cartElement = ({ image, title, quontity, price, id }) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'></th>
          <th scope='col'>First</th>
          <th scope='col'>Last</th>
          <th scope='col'>Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope='row'>1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope='row'>2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope='row'>3</th>
          <td colspan='2'>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
    // <div className='d-flex' key={id}>
    //   <div className='d-inline-block p-2 m-2 col'>
    //     <img className='img-thumbnail' src={image} />
    //   </div>
    //   <div className='d-inline-block p-2 m-2 col'>{title}</div>
    //   <div className='d-inline-block p-2 m-2 col'>{quontity}</div>
    //   <div className='d-inline-block p-2 m-2 col'>{price}</div>
    // </div>
  )
}

export default cartElement
