import React, { useState } from "react";
import "./Counter.css";

const Counter = () => {
    const [count,setcount] = useState(0)

    const increment=()=>{
        setcount(count+1)
    }
    
    const decrement=()=>{
        if(count>0){
            setcount(count-1)
        }
    }

    const reset=()=>{
        setcount(0)
    }
  return (
    <div className="counter-wrapper">
      <div className="counter-card">
        <h1 className="title">Counter App</h1>

        <div className="count-box">
          <span className="count-number">{count}</span>
        </div>

        <div className="btn-group">
          <button className="btn decrement" onClick={decrement}>-</button>
          <button className="btn reset" onClick={reset}>Reset</button>
          <button className="btn increment" onClick={increment}>+</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
