import React from 'react'
import './App.css'
import banner from './assets/banner.svg'
import listIcon from './assets/icon-list.svg'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import Success from './pages/Success'

const router = createBrowserRouter(
[
  {path:'/', children:[
    {index: true, element:<Home/> },
    {path:'success', element:<Success/>}
]}
]
)

const App = () => {
  return (
<RouterProvider router={router}/>
  )
}

export default App


