import './App.css'
import { useState,createContext } from 'react'
import ColorPicker from './components/ColorPicker'
import ColorDisplay from './components/ColorDisplay'
import Child1 from './components/child/Child1'

// step1: Creating Context
const UserContext = createContext();

function App() {

  // const [color, setColor] = useState("")
  const [name, setName] = useState("Sami")
  
// console.log(color)
  return (
    <>
    <h1>State Lifting</h1>
    {/* Passing state as a prop */}
     {/* <ColorPicker color={color} setColor={setColor}/>
     <ColorDisplay color={color}/> */}

      {/* step 2: Providing Context */}
     <UserContext.Provider value={(name)}>
        <Child1 />
     </UserContext.Provider>
    </>
  )
}

export default App
export {UserContext}