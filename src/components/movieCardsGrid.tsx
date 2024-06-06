import MovieCard from "./movieCard";
import { IMoviesData, IMovieData, axiosInstance } from "../utils";
import { useEffect, useState, useContext } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import { ModeContext } from "../utils";

const MovieCardsGrid = ()=>{
    const [movies, setMovies] = useState<IMovieData[]>([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [url, setUrl] = useState("movie/popular?language=en-US&page=")

    const mode = useContext(ModeContext)?.mode;
    
    const resetSearch = (_url: string)=>{
        if(_url != url){
            setUrl(_url);
            setMovies([]);
            setPage(1);
            setHasMore(true);
        }
    }

    const fetchMovies = async (pages: number = 1) =>{
        const fetchedMovies: IMovieData[] = []

        for (let i = 0; i < pages && hasMore; i++) {
            await axiosInstance(`${url}${page + i}`)
            .then((res: IMoviesData) => {
                const { results, total_pages } = res.data;
                results.map(movie => fetchedMovies.push(movie));

                if(total_pages <= page){
                    setHasMore(false);
                }
            })
        }
        setPage(page + pages);
        setMovies([...movies, ...fetchedMovies]);
    }

    useEffect(()=>{
        fetchMovies(3);
    },[]);

    useEffect(()=>{
        console.log(mode)
        if(mode?.type == "search"){
            resetSearch(`https://api.themoviedb.org/3/search/movie?query=${mode.search}&include_adult=false&language=en-US&page=`);
        }
        else{
            resetSearch("movie/popular?language=en-US&page=")
        }
    },[mode])

    useEffect(()=>{
        fetchMovies(3);
    },[url])

    return <div>
        <InfiniteScroll 
            dataLength={movies.length}
            next={fetchMovies}
            hasMore={hasMore}
            loader={<h4 className="text-white text-center">Loading...</h4>}
            scrollThreshold={0.8}
        >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4
                lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-4 ">
                {movies.map((movie, key)=>{
                    return <MovieCard movieData={movie} key={key}/>
                })}
            </div>
        </InfiniteScroll>
    </div> 
}

export default MovieCardsGrid;
