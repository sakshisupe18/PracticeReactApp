import React, { useState } from 'react'
import { ProductsInfo } from './ProdustsInfo';
import { Link } from 'react-router-dom';

const Products = () => {
  const [items, setItems] = useState(ProductsInfo);

  return (
    <div>
      {items.map((product) => {
        return (
          <div>
            <h3>{product.name}</h3>
            <Link to={`/product/${product.id}`}>
              click here for more info......
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default Products
