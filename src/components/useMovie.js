import { useState } from "react"
const useMovie = (initialValue) => {
    const [data, setData] = useState(initialValue)
    
    const getData = (url) => {
        fetch (url)
            .then((response) => response.json())
            .then((data) =>{
                data.results ? setData(data.results ) : setData(data)
            })
        }
    return {data, getData}
}

export default useMovie
