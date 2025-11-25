import React from 'react'
import  {useState} from 'react';

export const UseStateData1 = () => {
    var[name,setName]=useState("Sakshi");
    var changeName=()=>{
        console.log(name);
        setName("Savi");
        console.log(name);
    }
  return (
    <div>
      <h3>{name}</h3>
      <button onClick={changeName}>Change Name</button>
    </div>
  )
}



