import { BiTime } from "react-icons/bi"
import { Movie } from "./moviesData"

const MovieCard = ({ movie }: { movie: Movie }) => {
    const { src, title, main, runtime } = movie
    return (
        <div className="card ">
            <img src={src} alt={title} className="w-full" />
            <div className="p-4 text-white">
                <h4>{title}</h4>
                <p> {main} </p>
            </div>
            <div className="
                flex justify-between items-center  
                bg-cyan-50 rounded-md absolute 
                top-2 left-2 p-2 min-w[25%]
            ">
                <BiTime />
                <p>{runtime}</p>
            </div>
        </div>
    )
}

export default MovieCard