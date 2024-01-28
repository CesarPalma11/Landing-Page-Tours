import React from 'react'
import {Routes, Route} from 'react-router'
import Hero from './Components/Pages/Hero'
import Contact from './Components/Pages/Contact'
import About from './Components/Pages/About'
import Gallery from './Components/Pages/Gallery'
import Tours from './Components/Pages/Tours'
const Rout = () => {
  return (
    <>
    <Routes>
        <Route path='/' exact element={<Hero />}/>
        <Route path='/Contact' exact element={<Contact />}/>
        <Route path='/About' exact element={<About />}/>
        <Route path='/Gallery' exact element={<Gallery />}/>
        <Route path='/Tours' exact element={<Tours />}/>
        
    </Routes>
    </>
  )
}

export default Rout