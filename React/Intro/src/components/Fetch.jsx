import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Fetch = () => {

    const [data , setData] = useState()

    console.log("Outer")

    const getData = ()=>{
        //    let res = axios.get('https://jsonplaceholder.typicode.com/todos/1')

        let res =  fetch('https://jsonplaceholder.typicode.com/todos/1');

         console.log(res)
         setData(res)
         console.log(data)
    }

    // getData();

    //Type 1: Runs on every render
  //   useEffect(()=>{
  //     console.log("Inside UseEffect")
  //     // getData();
  // })

  // Type 2 : Runs on only first render
  //   useEffect(()=>{
  //     console.log("Inside UseEffect Type 2")
  //     getData();
  // },[])

  // Type 3 : Runs on first render and when data is changed/updated
  useEffect(()=>{
    console.log("Inside UseEffect Type 2")
    // getData();
},[data])


//lifecycle of react (functional) components -> Mount, unmount, update

  return (
    <div>
        <h1> Fetch data</h1>
    </div>
  )
}

export default Fetch