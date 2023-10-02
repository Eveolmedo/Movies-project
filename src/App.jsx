import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import useMovie from './components/useMovie'
import ContainCard from './components/ContainCard'
import DetailMovie from './components/DetailMovie';
import NowPlaying from './components/NowPlaying'
import TopRated from "./components/TopRated"
import Slider from './components/Slider'

function App() {
  const [inputSearch, setInputSearch] = useState("")
  const [currentPage, setCurrentPage] = useState(1)
  const { getData, data, totalPages } = useMovie([])
  const [hideElement, setHideElement] = useState(false)

  useEffect(() => {
    getData(inputSearch !== "" ? `https://api.themoviedb.org/3/search/movie?page=${currentPage}&api_key=${import.meta.env.VITE_API_KEY}&query=${inputSearch}` : `https://api.themoviedb.org/3/discover/movie?page=${currentPage}&api_key=${import.meta.env.VITE_API_KEY}`)
  },  [inputSearch, currentPage])

  return (
    <>
      <BrowserRouter>
        <Header setInputSearch={setInputSearch}/>
        <Slider />
        <Routes>
          <Route path='/' element={
              <ContainCard 
              movies={data}
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              totalPages={totalPages}/>
          }/>
          <Route path='/detailMovie/:id' element={<DetailMovie />}/>
          <Route path='/nowPlaying' element={<NowPlaying />} />
          <Route path='/topRated' element={<TopRated />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
