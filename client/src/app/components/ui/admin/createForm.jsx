import React, { useState } from 'react'
// import httpService from '../../services/http.service'
import InputForm from '../../common/form/inputForm'
import RadioField from '../../common/form/radioField'
import SelectField from '../../common/form/selectField'
import calculateCategory from '../../../utils/calculateCategory'
const CreateForm = () => {
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
    // const resp = await httpService.post(
    //   `products/${data.sex}/${data.category}/${data.type}/${_id}`,
    //   data
    // )
    // console.log(resp)
    setData((prevState) => ({ ...prevState, image: '' }))
  }

  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }
  return (
    <form onSubmit={handleSubmit} className='m-2'>
      <RadioField
        options={[
          { name: 'Men', value: 'men' },
          { name: 'Women', value: 'women' }
        ]}
        name='sex'
        label='Sex:'
        value={data.sex}
        onChange={handleChange}
      />

      <RadioField
        label='Category:'
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
        label='Type:'
        name='type'
        value={data.type}
        onChange={handleChange}
        options={calculateCategory(data)}
      />
      <InputForm
        label='Title:'
        name='title'
        value={data.title}
        onChange={handleChange}
      />
      <InputForm
        label='Price:'
        name='price'
        value={data.price}
        onChange={handleChange}
      />
      <InputForm
        label='Rating:'
        name='rating'
        value={data.rating}
        onChange={handleChange}
      />
      <InputForm
        label='Image:'
        name='image'
        value={data.image}
        onChange={handleChange}
      />
      <button type='submit' className='btn btn-primary my-2'>
        Add item
      </button>
    </form>
  )
}

export default CreateForm
