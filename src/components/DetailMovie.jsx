import { useParams } from "react-router-dom"
import { useEffect } from "react"
import CardContent  from "@mui/material/CardContent"
import Typography  from "@mui/material/Typography"
import { Button } from "@mui/material"
import Card from "@mui/material/Card"
import { Link } from "react-router-dom"
import useMovie from "./useMovie"

export default function DetailMovie() {
  const { id } = useParams()
  const { getData, data } = useMovie([])

  useEffect(() => {
      getData(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_API_KEY}`)
  },  [id])

  return (
    <Card
      sx={{ 
      display:"flex",
      width: "100vw",
      height: "100vh",
      justifyContent: "center", 
      backgroundImage: `url(https://image.tmdb.org/t/p/original//${data.backdrop_path})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      }}>
        <div style={{ position: "absolute", backgroundColor: "#000", opacity: .6, width: "100vw", height: "100vh"}}></div>
        <CardContent sx={{ 
          position:"relative",
          display: "flex",
          alignItems: "center",
          width: "60vw",
          justifyContent: "space-between",
        }}>
          <img style={{width: 300, height: 450}} src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}/>
          <CardContent sx={{width: 500, height: 450, color: "white"}}>
            <Typography gutterBottom variant="h3">
              {data.original_title}
            </Typography>
            <Typography sx={{width: 500}}>
              {data.overview}
            </Typography>
            <div>
                <Button sx={{backgroundColor:"#e0b65b", marginTop: "60px"}}>
                  <Link to="/" style={{textDecoration: "none"}}>Volver al Inicio</Link>
                </Button>
            </div>
          </CardContent>
        </CardContent>
    </Card>
  )
}