import React from 'react'
import { useReducer } from 'react'

const ReducerCounter = () => {
    var reducer=(count,action)=>{
        console.log(count,"Count");
        console.log(action,"action");
        switch(action)
        {
          case "Add": return count+1;
          case "Sub": return count-1;
          default : return 0;
        }
    }
    var [count,dispatchCount]=useReducer(reducer,0)
    console.log(useReducer);
  return (
    <div>  
      <h3>{count}</h3>
      <button onClick={()=>{dispatchCount("Add")}}>+</button>
      <button onClick={()=>{dispatchCount("Sub")}}>-</button>
    </div>
  )
}

export default ReducerCounter
