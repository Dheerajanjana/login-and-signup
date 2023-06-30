import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Header from "./components/Header"
import Home from "./components/Home"
import Signup from "./components/Signup"
import Contact from "./components/Contact"
import Login from './components/Login'



const App = () => {
  return (
    <div>
      <BrowserRouter>
            <Header />
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/contact" element={<Contact/>} />
          </Routes>
         
        </BrowserRouter>
    </div>
  )
}

export default App

