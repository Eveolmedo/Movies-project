import Box from '@mui/material/Box';
import MovieCard from "./MovieCard"
import Pagination from "./Pagination.jsx";

export default function ContainCard({ movies, setCurrentPage, currentPage, totalPages }) {
    return (
        <>
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
            <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} totalPages={totalPages}/>
        </>
    )
}