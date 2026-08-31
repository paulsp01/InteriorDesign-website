import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Layout from './components/Layout'
import Services from './pages/Services'
import Philosophy from './pages/Philosophy'
import Inquiry from './pages/Inquiry'
import Consultation from './pages/Consultation'

const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
       <Route index  element={<Home/>} />
       <Route path='/services'  element={<Services/>} />
         <Route path='/philosophy'  element={<Philosophy/>} />
           <Route path='/inquiry'  element={<Inquiry/>} />
            <Route path='/consultation'  element={<Consultation/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App