import React, {useRef} from 'react'

const Ref = () => {
    //step 1 : create 
    let color = useRef()

    function changeColor(){
        console.log("clickedd")
        color.current.style.backgroundColor= "blue"
    }

  return (
    <div>
        <button ref={color} >Color</button>
        <br />
        <button onClick={changeColor}>Change Color</button>
    </div>
  )
}

export default Ref