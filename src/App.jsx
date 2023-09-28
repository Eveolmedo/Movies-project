import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import useMovie from './components/useMovie'
import ContainCard from './components/ContainCard'

function App() {
  const [inputSearch, setInputSearch] = useState("")
  const { getData, data } = useMovie([])

  useEffect(() => {
    getData(inputSearch !== "" ? `https://api.themoviedb.org/3/search/movie?language=es-ES&page=1&api_key=${import.meta.env.VITE_API_KEY}&query=${inputSearch}` : `https://api.themoviedb.org/3/discover/movie?api_key=${import.meta.env.VITE_API_KEY}`)
  },  [inputSearch])

  return (
    <>
      <BrowserRouter>
        <Header setInputSearch={setInputSearch}/>
        <Routes>
          <Route path='/' element={
              <ContainCard movies={data}/>
            }/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
