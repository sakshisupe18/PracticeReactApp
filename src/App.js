import logo from './logo.svg';
import './App.css';
import BookList from './BookList';
import BookList2 from './BookList2';
import Book from './Book';
import { UseStateData1 } from './UseState/UseStateData1';
import {UseStateArrayofObaject} from './UseState/UseStateArrayofObaject';
import Amazon2 from './Amazon/Amazon2';
import Amazon3 from './Amazon/Amazon3';
import UseEffectData from './UseEffect/UseEffectData';
import UseEffectGitHubData from './UseEffect/UseEffectGitHubData';
import ControlinputForm from './Forms/ControlinputForm';
// import MultiinputForm from './Forms/MultiinputForm';
import UseRef from './UseRefHook/UseRef';
import PropDrillingDemo from './PropDrilling/PropDrillingDemo';
import UseContextDemo from './PropDrilling/UseContextDemo';
import ReducerCounter from './Reducer/ReducerCounter';
import {BrowserRouter} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import {Route} from 'react-router-dom';
import Main from './Routing/Main';
import About from './Routing/About';
import Home from './Routing/Home';
import Products from './Routing/Products';
import { SingleProduct } from './Routing/SingleProduct';
import AllProducts from './ShopingCard/AllProducts';
import { useState } from 'react';
import Cart from './ShopingCard/Cart';

function App() {
  var [cart,setCart]=useState([])
  return (
    <div>
      {/* <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<h1>This is Main Component</h1>}/>
        <Route path='/home' element={<h1>This is Home Component</h1>}/>
        <Route path='/about' element={<h1>This is About Component</h1>}/> */}

        {/* <Route path='/' element={<Main/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<Products/>}/>
          <Route path='/products/:productId' element={<SingleProduct/>}/>
          <Route path='/allproducts' element={<AllProducts cart={cart} setCart={setCart}/>}/>
          <Route path='/cart' element={<Cart cart={cart} setCart={setCart}/>}/>

        </Route>
      </Routes>
      </BrowserRouter> */} */

      {/* <BookList/> */}
      {/* <BookList2></BookList2> */}
      {/* <Book></Book> */}
      {/* <UseStateData></UseStateData> */}
      {/* <UseStateData1></UseStateData1> */}
      {/* <UseStateArrayofObaject></UseStateArrayofObaject> */}
      {/* <Amazon3></Amazon3> */}
      {/* <UseEffectData></UseEffectData> */}
      {/* <UseEffectGitHubData></UseEffectGitHubData> */}
      {/* <ControlinputForm></ControlinputForm> */}
      {/* <MultiinputForm></MultiinputForm> */}
      {/* <UseRef></UseRef> */}
      <PropDrillingDemo></PropDrillingDemo>
      {/* <UseContextDemo></UseContextDemo> */}
      {/* <ReducerCounter></ReducerCounter> */}

    </div>

  );
}

export default App;
