import { useState } from 'react'
import { BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import Booking from './Components/Booking'
import Package from './Components/Package'
import { Login } from './components/Login'

import Review from './components/Review'
import Gallery from './components/Gallery'

import Resort from './Components/Resort'

import Footer from './Components/Footer'
function App() {
  

  return (
    <>
    

     <Router>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/Booking" element= {<Booking/>}/>
      <Route path='/Package' element={<Package/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Review' element={<Review/>}/>
      <Route path='/Gallery' element={<Gallery/>}/>
      <Route path='/Resort' element={<Resort/>}/>
      </Routes>
     </Router>

    <Footer/>
    
     
    </>
  )
}

export default App