import { useState } from "react"
const useMovie = (initialValue) => {
    const [data, setData] = useState(initialValue)
    const [totalPages, setTotalPages] = useState(0)

    const getData = (url) => {
        fetch (url)
            .then((response) => response.json())
            .then((data) =>{
                data.results ? setData(data.results) : setData(data)
                setTotalPages(data.total_pages)
            })
        }
    return {data, getData, totalPages}
}

export default useMovie
