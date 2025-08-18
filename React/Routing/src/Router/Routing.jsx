import React from 'react'
import {createBrowserRouter} from 'react-router'
import Home from '../Pages/Home'
import Profile from '../Pages/Profile'
import Dashboard from '../Pages/Dashboard'

const Routing = createBrowserRouter(
    [
        {
            path: "/",
            element:<Home/>
        },
        {
            path: "/profile",
            element:<Profile/>,
            // children:{
            //     path:"/user",
            //     element:<User/>
            // }
        },
        {
            path:"/dashboard",
            element:<Dashboard/>
        }
    ]
)

export default Routing