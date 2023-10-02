import { useState, useEffect } from 'react'
import useMovie from "./useMovie"
import ContainCard from './ContainCard'

export default function NowPlaying() {
    const { getData, data, totalPages } = useMovie([])
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        getData(`https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_API_KEY}&page=${currentPage}`)
    }, [currentPage, totalPages])

    return (
        <>
            <h1 style={{padding: 10, textAlign: "center", fontFamily: "Roboto", color: "white"}}>Latest releases</h1>
            <ContainCard 
            movies={data}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            totalPages={totalPages}
            />
        </>
    )

}