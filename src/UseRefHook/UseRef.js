import React from 'react'
import { useRef } from 'react'
export const UseRef = () => {
    var divContainer=useRef(null);
    var h1Container=useRef(null);
    var formContainer=useRef(null);
    var changeH1=()=>{
        h1Container.current.style.color="red";
        h1Container.current.style.backgroundColor="pink";
    }
    var changeDiv=()=>{
        divContainer.current.style.border="2px solid black";
    }
    var loadData=()=>{
        formContainer.current.children[0].value="ABC";
        formContainer.current.children[1].value="PQR";
        formContainer.current.children[2].value="XYZ";
    }
  return ( 
    <div ref={divContainer} onClick={changeDiv}>
        <h1 ref={h1Container} onClick={changeH1}>Welcome to UseREF Hook</h1>
      <form ref={formContainer}>
        <input type="text" id="first"/>
        <input type="text" id="second"/>
        <input type="text" id="third"/>
      </form>
      <button onClick={loadData}>LOAD</button>
    </div>
  )
}

export default UseRef
