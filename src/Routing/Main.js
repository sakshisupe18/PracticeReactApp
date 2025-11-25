import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Main = () => {
  return (
    <div style={{backgroundColor:"lightgray",width:"400px",height:"300px"}}>
      <h1>This is Main Component</h1>
      <Link to="/" className='navbar'>Main</Link>
      <Link to="/home" className='navbar'>Home</Link>
      <Link to="/about" className='navbar'>About</Link>
      <Link to="/products" className='navbar'>Products</Link>
      <Link to="/allproducts" className='navbar'>All Products</Link>
      <Link to="/cart" className='navbar'>Cart</Link>

      <Outlet/>
    </div>
  )
}

export default Main
