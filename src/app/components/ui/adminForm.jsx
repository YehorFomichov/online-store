import React, { useState } from 'react'
import httpService from '../../services/http.service'
import InputForm from '../common/form/inputForm'
import RadioField from '../common/form/radioField'
import SelectField from '../common/form/selectField'
import { nanoid } from 'nanoid'
const AdminForm = () => {
  const [data, setData] = useState({
    sex: '',
    category: '',
    type: '',
    image: '',
    title: '',
    price: '',
    rating: ''
  })
  const handleSubmit = async (e) => {
    e.preventDefault()
    const _id = nanoid()
    const resp = await httpService.put(
      `products/${data.sex}/${data.category}/${data.type}/${_id}`,
      data
    )
    console.log(resp)
    setData((prevState) => ({ ...prevState, image: '' }))
  }
  const calculateCategory = () => {
    if (data.sex === 'men') {
      if (data.category === 'clothes') {
        return [
          { name: 'Shirts', value: 'shirts' },
          { name: 'T-Shirts', value: 'tshirts' },
          { name: 'Underwear', value: 'underwear' },
          { name: 'Jeans', value: 'jeans' }
        ]
      }
      if (data.category === 'bags') {
        return [
          { name: 'Sunglasses', value: 'sunglasses' },
          { name: 'Bags and backpacks', value: 'bags' }
        ]
      }
      if (data.category === 'shoes') {
        return [
          { name: 'Shoes', value: 'shoes' },
          { name: 'Sandals', value: 'sandals' }
        ]
      }
    }
    if (data.sex === 'women') {
      if (data.category === 'clothes') {
        return [
          { name: 'Outerwear', value: 'outerwear' },
          { name: 'Dresses', value: 'dresses' },
          { name: 'T-Shirts', value: 'tshirts' },
          { name: 'Underwear', value: 'underwear' }
        ]
      }
      if (data.category === 'bags') {
        return [
          { name: 'Sunglasses', value: 'sunglasses' },
          { name: 'Bags and backpacks', value: 'bags' }
        ]
      }
      if (data.category === 'shoes') {
        return [
          { name: 'Shoes', value: 'shoes' },
          { name: 'Sandals', value: 'sandals' }
        ]
      }
    }
  }
  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }
  return (
    <form onSubmit={handleSubmit}>
      <RadioField
        options={[
          { name: 'Men', value: 'men' },
          { name: 'Women', value: 'women' }
        ]}
        name='sex'
        label='Sex'
        value={data.sex}
        onChange={handleChange}
      />

      <RadioField
        label='Category'
        name='category'
        value={data.category}
        onChange={handleChange}
        options={[
          { name: 'Clothes', value: 'clothes' },
          { name: 'Bags', value: 'bags' },
          { name: 'Shoes', value: 'shoes' }
        ]}
      />
      <SelectField
        label='Type'
        name='type'
        value={data.type}
        onChange={handleChange}
        options={calculateCategory()}
      />
      <InputForm
        label='Title'
        name='title'
        value={data.title}
        onChange={handleChange}
      />
      <InputForm
        label='Price'
        name='price'
        value={data.price}
        onChange={handleChange}
      />
      <InputForm
        label='Rating'
        name='rating'
        value={data.rating}
        onChange={handleChange}
      />
      <InputForm
        label='Image'
        name='image'
        value={data.image}
        onChange={handleChange}
      />
      <button type='submit' className='btn btn-primary'>
        Submit
      </button>
    </form>
  )
}

export default AdminForm
