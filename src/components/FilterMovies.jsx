import { useEffect} from "react"
import useMovie from "./useMovie"
import ContainCard from './ContainCard'

export default function FilterMovies() {
    const { getData, data } = useMovie([])

    useEffect(() => {
        getData(`https://api.themoviedb.org/3/movie/upcoming?api_key=${import.meta.env.VITE_API_KEY}`)
    }, [])

    return (
        <ContainCard movies={data}/>
    )

}