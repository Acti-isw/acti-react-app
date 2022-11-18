import React, { useState } from 'react'
import Login from './components/login'
import './App.css'
import Nav from'./components/nav'
import Home from './components/home'
import NavigationBar from './components/navigationBar'

function App() {

  return (
   <React.Fragment>
   <Nav/>
   <Home/>
   <NavigationBar/>
   {/* <Login>
      
   </Login> */}
   </React.Fragment>
  )
}

export default App
