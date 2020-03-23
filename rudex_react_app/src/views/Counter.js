import React from 'react';
function Counter ({caption,value,onIncrement,onDecrement}){
  return (
    <div>
      <button onClick={onIncrement}>+</button>
      <button onClick={onDecrement}>-</button>
      <span>{caption} count :{value}</span>
    </div>
  )
}

export default Counter;