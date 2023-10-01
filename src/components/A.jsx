import { useState, useEffect } from 'react'
import useMovie from "./useMovie"
import ContainCard from './ContainCard'

export default function A() {
    const { getData, data, totalPages } = useMovie([])
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        getData(`https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}&page=${currentPage}`)
    }, [currentPage, totalPages])

    return (
        <ContainCard 
        movies={data}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalPages={totalPages}
        />
    )

}