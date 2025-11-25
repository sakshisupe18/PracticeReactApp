import React from 'react'

const OneProduct = ({item,cart,setCart}) => {
    var{id,name,price,image}=item;
    var addProductToCart=(item)=>{
        setCart([...cart,item]);
    }
    var removeProductFormCart=(item)=>{
        var balanceItems=cart.filter((i)=>{
            return(item.id!==i.id)
        })
        setCart(balanceItems);
    }
  return (
    <div>
      <h3>Name: {name}</h3>
      <h3>Rs.{price}</h3>
      <img src={image} alt={name} width="130px"/>
      <button onClick={()=>{addProductToCart(item)}}>Add Product to Cart</button>
      <button onClick={()=>{removeProductFormCart(item)}}>Remove Product from Cart</button>
    </div>
  )
}

export default OneProduct
