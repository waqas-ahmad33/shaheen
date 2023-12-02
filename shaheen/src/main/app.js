import React from 'react'
import Home from '../component/home'
import About from '../component/about'
import Result from '../component/result'
import Nav from '../component/navigation/nav'
import { BrowserRouter,Route, Routes } from 'react-router-dom'


const App = () => {
  return (
<BrowserRouter>
    <Nav/>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path='/result' element={<Result/>}/>
  <Route path='/about' element={<About/>}/>
  
    </Routes>
    </BrowserRouter>
  )
}

export default App