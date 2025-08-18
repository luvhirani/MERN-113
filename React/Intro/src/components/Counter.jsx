import React, { useEffect, useState } from 'react'
import '../components/Counter.css'

const Counter = () => {

    let [count, setCount] = useState(0)
    let [multiply, setMult] = useState(1)


    useEffect(()=>{
        console.log("inside useEffect")
    },[multiply,count])

    // let count = 0;
    console.log(count)

    function handleDecrement(){
        setCount(--count);
        console.log(count)
        console.log("Click Dec")
    }

    function handleIncrement(){
        setCount(++count);
        console.log(count)
        console.log("Click Inc")
    }

    function handleMultiply(){
        setMult(multiply * 2);
        console.log(multiply)
        console.log("Click Mult")
    }

  return (
    <div className='counter'>
        <div>Counter App</div>
        <button onClick={handleDecrement}>-</button>
        <p>The value of Count is: {count} </p>
        <p>The value of Multiply Count is: {multiply} </p>
        <button onClick={handleIncrement} >+</button>
        <button onClick={handleMultiply} >*</button>
    </div>
  )
}

export default Counter