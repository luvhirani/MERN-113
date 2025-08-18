import React from 'react'

const ColorDisplay = ({color}) => {
  console.log("ColorDisplay",color)
  return (
    <>
      <p>{color}</p>
      {/* <p>Selected Color is : <b>{color}</b></p> */}

      <div style={{width:50, height:50, backgroundColor: color}}></div>
    </>
  )
}

export default ColorDisplay