import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const UseEffectData = () => {
    var[name,setName]=useState("Sakshi");
    var changeName=()=>{
        setName("Vaishu");
    }
    useEffect(()=>{alert("Hello,Everyone")},[])
  return (
    <div className='content'>
      <h3>{name}</h3>
      <button onClick={changeName}>Change Name</button>
      <h2>This is useEffect Component</h2>
    </div>
  )
}

export default UseEffectData
