import React from 'react'

const ColorPicker = ({color,setColor}) => {
    // console.log(color)
  return (
    <>
    <label > Choose Color</label>
    <select name="" id="" onChange={(e)=>setColor(e.target.value)} >
    <option value="red">Red</option>
    <option value="green">Green</option>
    <option value="blue">Blue</option>
    </select>
    </>
  )
}

export default ColorPicker