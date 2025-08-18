import React, { useState, useMemo } from 'react'

const Memo = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("hello")

    // Expensive Task/operation
    const expensiveCalculation = ()=>{
        console.log("Calculating....")
        let total = 0;
        for (let i=0; i<10000; i++){
            console.log("inside expensive...")
            total = total + i;
        }
        return total;
    }

    const total = useMemo(expensiveCalculation,[text]);
    // const total = expensiveCalculation()

  return (
    <div>
        <p>Expensive Total: {total} </p>
        <button onClick={()=>{
            setCount(count+1)
        }}>Increment Count</button>
    <br />

    <input
    value={text}
    onChange={(e)=>{
        setText(e.target.value)
    }}
    />

        <p>Count : {count}</p>
    </div>
  )
}

export default Memo