import { useState, useEffect } from 'react'
import useMovie from "./useMovie"
import ContainCard from './ContainCard'

export default function TopRated() {
    const { getData, data, totalPages } = useMovie([])
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        getData(`https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}&page=${currentPage}`)
    }, [currentPage, totalPages])

    return (
        <>
            <h1 style={{padding: 10, textAlign: "center", fontFamily: "Roboto", color: "white"}}>Top rated</h1>
            <ContainCard 
            movies={data}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
            totalPages={totalPages}
            />
        </>
    )

}