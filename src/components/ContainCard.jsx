import Box from '@mui/material/Box';
import MovieCard from "./MovieCard"

export default function ContainCard({movies}) {
    return (
        <Box sx={{display:"flex", justifyContent:"space-around", flexWrap:"wrap", padding:"20px"  }}>
            {movies && movies.map(({ backdrop_path, title, overview, id}) => {
                return (
                    <MovieCard 
                    image={backdrop_path}
                    title={title}
                    overview={overview}
                    key={id} />
                )
            })}
        </Box>
    )
}