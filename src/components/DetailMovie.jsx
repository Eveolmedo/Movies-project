import { useParams } from "react-router-dom"
import { useEffect} from "react"
import CardContent  from "@mui/material/CardContent"
import  Typography  from "@mui/material/Typography"
import  CardMedia  from "@mui/material/CardMedia"
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

    console.log(data)
   
  return (
    <div style={{
        height: "100vh",
        width: "full",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }}>
        <Card 
            sx={{ 
                display:"flex",
                height: "auto",
                width: 800, 
                boxShadow:"14px 14px 13px -6px rgba(0,0,0,0.50)",
                }}>
        <img src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}/>
        <CardContent component="div" sx={{margin: "60px 30px"}}>
            <Typography gutterBottom variant="h5" component="div">
            {data.original_title}
            </Typography>
            <div>
                <Button sx={{backgroundColor:"#e0b65b", marginTop: "60px"}}>
                <Link to="/" style={{textDecoration: "none"}}>Volver al Inicio</Link>
                </Button>
            </div>
        </CardContent>
      </Card>
    </div>
  )
}