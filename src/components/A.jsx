import { useEffect} from "react"
import useMovie from "./useMovie"
import ContainCard from './ContainCard'

export default function A() {
    const { getData, data } = useMovie([])

    useEffect(() => {
        getData(`https://api.themoviedb.org/3/movie/top_rated?api_key=${import.meta.env.VITE_API_KEY}`)
    }, [])

    return (
        <ContainCard movies={data}/>
    )

}