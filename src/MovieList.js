import React, {useContext} from 'react';
import MovieDisplay from './MovieDisplay';
import {MovieContext} from './MovieContext';


const MovieList = ()=>{
    const [movies, setMovies] = useContext(MovieContext); 
    return(
        <div>
        {movies.map(movie=>( <MovieDisplay name = {movie.name} price =  {movie.price}/>))}       
        </div>
    );
}

export default MovieList;