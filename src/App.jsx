import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"


function App() {

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element/>
        </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
