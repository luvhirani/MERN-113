import Routing from './Router/Routing'
import { BrowserRouter, RouterProvider, Routes, Route} from 'react-router'
import Profile from './Pages/Profile'
import Home from './Pages/Home'
import './App.css'
import Login from './Pages/Login'
import Memo from './components/Memo'
import Ref from './components/Ref'

function App() {
  

  return (
    // <>

    //   <RouterProvider router={Routing}/>

    // </>

    <BrowserRouter>
      <Routes>
        <Route 
          path="/" 
          // element={<Home/>}
          // element= {<Memo/>}
          element= {<Ref/>}
        />
        <Route
          path="/profile" 
          element={<Profile/>}
        />
         <Route
          path="/login" 
          element={<Login/>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
