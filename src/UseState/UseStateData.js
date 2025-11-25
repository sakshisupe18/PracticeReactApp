import React from 'react'

const UseStateData = () => {
    var name="Sakshi";
    var changeName=()=>{
        console.log(name);
        name="Savi";
        console.log(name);
    }
  return (
    <div>
      <h3>{name}</h3>
      <button onClick={changeName}>Change Name</button>
    </div>
  )
}

export default UseStateData
