import React from 'react'
import { ProductsInfo } from '../Routing/ProdustsInfo'
import { useState } from 'react'
import OneProduct from './OneProduct';
const AllProducts = ({cart,setCart}) => {
    var[items,setItems]=useState(ProductsInfo);
  return (
    <div>
      {items.map((item)=>{
        return(<OneProduct item={item} cart={cart} setCart={setCart}></OneProduct>)
      })}
    </div>
  )
}

export default AllProducts
