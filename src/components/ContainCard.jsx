import Box from '@mui/material/Box';
import MovieCard from "./MovieCard"

export default function ContainCard({movies}) {
    return (
        <Box sx={{display:"flex", justifyContent:"space-around", flexWrap:"wrap", padding:"20px"  }}>
            {movies && movies.map(({ poster_path, title, overview, id}) => {
                return (
                    <MovieCard 
                    image={poster_path}
                    title={title}
                    overview={overview}
                    key={id}
                    id={id} />
                )
            })}
        </Box>
    )
}