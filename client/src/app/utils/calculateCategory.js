const calculateCategory = (data) => {
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

export default calculateCategory
