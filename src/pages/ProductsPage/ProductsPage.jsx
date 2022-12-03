import React, { useState } from 'react'
import Products from '../../components/Products/Products'
import "./ProductsPage.scss"

function ProductsPage({products}) {
  const [searchValue, setSearchValue] = useState('')

  const searchProduct = (event) => {
    setSearchValue(event.target.value)
  }

  const productsItem = products.filter(prod => prod.name.toLowerCase().includes(searchValue))
  .map(p => <Products product={p}/>)
  return (
    <div className='products-page'>
        <div className='products-page-main'>
            <h1>All Sneakers</h1>
            <input
            value={searchValue}
            onChange={searchProduct}
            placeholder='search...'
            />
        </div>
        <div className='product-main'>
          {productsItem}
        </div>
    </div>
  )
}

export default ProductsPage