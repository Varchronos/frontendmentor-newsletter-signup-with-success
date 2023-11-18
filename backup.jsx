import React from 'react'
import './App.css'
import banner from './assets/banner.svg'
import listIcon from './assets/icon-list.svg'
// import {createBrowserRouter, RouterProvider} from 'react-router-dom'

// const router = createBrowserRouter(
// [
//   {path:'/', children:[
//     {path: 'home', },
//     {path:'success',}
// ]}
// ]
// )


const App = () => {
  return (
    <>
    <div className="container">
      <div className="container_main">
        <div className="container_main_text">
        <h1>Stay Updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
        <ul>
          <div className="container_main_listgroup">
            <img src={listIcon} alt="icon" />
          <li>Product discovery and building what matters</li>
          </div>
          <div className="container_main_listgroup">
          <img src={listIcon} alt="icon" />
          <li>Measuring to ensure updates are a success</li>
          </div>
          <div className="container_main_listgroup">
          <img src={listIcon} alt="icon" />
          <li>And much more!</li>
          </div>
        </ul>
        </div>
        <form className="container_main_form">
        <div className="input_group">
          <label htmlFor="email">Email Address</label>
          <input type="email" name='email' id='email' placeholder='email@company.com' required/>
          <button type='submit' >Subscribe to my monthly newsletter</button>
        </div>
        </form>
      </div>
      <div className="container_image">
      <img src={banner} alt="banner" />
      </div>
    </div>
  </>
  )
}

export default App


