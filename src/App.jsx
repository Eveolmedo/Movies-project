import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import useMovie from './components/useMovie'
import ContainCard from './components/ContainCard'
import DetailMovie from './components/DetailMovie';
import FilterMovies from './components/FilterMovies'
import A from "./components/A"
import Slider from './components/Slider'

function App() {
  const [inputSearch, setInputSearch] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const { getData, data, totalPages } = useMovie([])

  useEffect(() => {
    getData(inputSearch !== "" ? `https://api.themoviedb.org/3/search/movie?language=es-ES&page=${currentPage}&api_key=${import.meta.env.VITE_API_KEY}&query=${inputSearch}` : `https://api.themoviedb.org/3/discover/movie?language=es-ES&page=${currentPage}&api_key=${import.meta.env.VITE_API_KEY}`)
  },  [inputSearch, currentPage])

  
  return (
    <>
      <BrowserRouter>
        <Header setInputSearch={setInputSearch}/>
        <Slider movies={data}/>
        <Routes>
          <Route path='/' element={
              <ContainCard 
              movies={data}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              totalPages={totalPages}/>
          }/>
          <Route path='/detailMovie/:id' element={<DetailMovie />}/>
          <Route path='/ultimosLanzamientos' element={<FilterMovies />}/>
          <Route path='/mejorPuntuadas' element={<A />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
