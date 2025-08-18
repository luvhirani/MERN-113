import './App.css'
import Course from './components/Course'
import fullstack from './assets/full.png'
import java from './assets/java.png'
import python from './assets/python.webp'
import Logout from './components/Logout'
import Login from './components/Login'
import { useState } from 'react'

function App() {
  const [isLogin, setLogin] = useState(true)

  
  return (
    <>
      {/* <Course name="Full Stack" image ={fullstack} />
      <Course name ="Python" image = {python} />
      <Course name ="Java" image = {java} /> */}

      { isLogin ? <Logout/> : <Login/>}


    </>
  )
}

export default App
