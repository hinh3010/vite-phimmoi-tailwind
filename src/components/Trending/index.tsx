import { moviesData } from "./moviesData";
import MovieCard from "./MovieCard";


function Trending() {
    return (
        <>
            <h3 className='
                border-b border-primary
                mt-12 mb-6 pb-4 text-3xl
            '
            >Trending</h3>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mb-12'>
                {moviesData.map((movie, i) => (
                    <MovieCard key={i} movie={movie} />
                ))}
            </div>

            <div className='flex justify-center items-center'>
                <button className='btn hover:scale-125 '>load more</button>
            </div>
        </>
    );
}

export default Trending;