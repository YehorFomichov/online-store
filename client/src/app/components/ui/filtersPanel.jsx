import React, { useState } from 'react'
import './filterPanel.css'
import Slider from '../common/slider/slider'
import { useFilter } from '../../hooks/useFilter'
const FiltersPanel = () => {
  const [show, setShow] = useState(false)
  const { minPrice, maxPrice, handleChangePrice } = useFilter()
  return (
    <div className='p-1'>
      <button className='btn text-white' onClick={() => setShow(!show)}>
        <i className='bi bi-filter-circle text-warning p-1'></i> Filters
      </button>
      {show && (
        <div className='filter-panel container border'>
          <div className='row'>
            <h5 className='my-4'>Select price range:</h5>
            <Slider
              max={10000}
              minVal={minPrice}
              maxVal={maxPrice}
              onChange={handleChangePrice}
            />
          </div>
        </div>
      )}
    </div>
  )
}

export default FiltersPanel
