import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './Home'
import Blog from './Blog'

const App  = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Blog/>}/>
        <Route path='/home' element={<Home/>}/>

      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App