import React from 'react'
import OneProduct from './OneProduct'

const Cart = ({cart,setCart}) => {
  return (
    <div>
      {cart.map((item)=>{
        return(<OneProduct item={item} cart={cart} setCart={setCart}/>)
      })}
    </div>
  )
}

export default Cart
