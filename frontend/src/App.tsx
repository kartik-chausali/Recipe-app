/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useEffect, useState } from 'react'
import './App.css'

import { BrowserRouter , Routes , Route } from 'react-router-dom'
import Home from './pages/Home'
import FullRecipe from './pages/FullRecipe'
import { DarkModeContext } from './context/DarkModeContext'


function App() {

  const context = useContext(DarkModeContext)

  if(!context){
     throw new Error('DarkModeContext must be used within a DarkModeProvider');
  }

  const {darkMode} = context;

    useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark'); // <html class="dark">
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);
  
  return (
    <>
    
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/full' element={<FullRecipe/>}/>
      </Routes>
      </BrowserRouter>
  
    </>
  )
}

export default App
