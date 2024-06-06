import { IMovieData } from "../utils";

interface PropsMovieCard{
    movieData: IMovieData;
}
const MovieCard = ({movieData}: PropsMovieCard)=>{
    
    return <div className="rounded-md bg-white flex flex-col shadow-md">
        <img
            className="rounded-t-md"
            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movieData.poster_path}`}
        />
        <div className="flex flex-col p-2">
            <p className="font-bold">{movieData.original_title}</p>
            <p>{new Date(movieData.release_date ?? "").toDateString()}</p>
        </div>

    </div>
}

export default MovieCard
