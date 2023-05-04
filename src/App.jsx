import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomeImage from './components/HomeImage'
const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<HomeImage/>}/>
    </Routes>
    </>
  
  )
}

export default App