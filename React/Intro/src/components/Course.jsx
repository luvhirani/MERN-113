import React from 'react'
import '../components/Course.css'


const Course = (props) => {
  return (
 <div>
    <div className='container'>
       <h4>{props.name}</h4>
        <img src={props.image} />
        <p>This is a full Stack Course</p>
    </div>
 </div>
  )
}

export default Course