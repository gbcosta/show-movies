import axios from "axios";
import { Dispatch, SetStateAction, createContext } from "react";

interface IMovieData{
    original_title: string;
    release_date: string;
    vote_average: number;
    poster_path: string;
}

interface IMoviesData{
    data: {
        results: MovieData[],
        total_pages: number
    },
}

interface ImodeContext{
    type: "popular" | "search",
    search: string
}

const ModeContext = createContext<{
    mode: ImodeContext,
    setMode: Dispatch<SetStateAction<ImodeContext>>
}| null>(null);

const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers:{
        Accept: "application/json",
        authorization: `Bearer ${import.meta.env.VITE_API_KEY}`
    }
});

export type{
    IMovieData,
    IMoviesData,
    ImodeContext
}

export {
    axiosInstance,
    ModeContext
}
