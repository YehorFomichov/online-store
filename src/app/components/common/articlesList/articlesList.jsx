import React from 'react'
import { useProducts } from '../../../hooks/useProducts'
// import './articlesList.css'
const ArticlesList = () => {
  const { products, isLoading } = useProducts()
  const { clothes, underwear } = products
  const allElements = { ...clothes, ...underwear }
  if (!isLoading) {
    console.log(products)
  }
  return (
    <>
      <div className='articles-block'>
        <div className='article'>
          <div className='article-card'>
            <div className='article-image'>
              {!isLoading &&
                Object.keys(allElements).map((el) => (
                  <>
                    <img src='' alt=''></img>
                    <h1>{el}</h1>
                  </>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ArticlesList
