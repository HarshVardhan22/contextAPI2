import React, {useContext} from 'react';
import "./Navbar.css";
import {MovieContext} from './MovieContext';

const Navbar = ()=>{

    const [movies,setMovies] = useContext(MovieContext);

    return(
        <div className = 'navbar'>
            <p>Box Jox</p>
            <p>Number of movies: {movies.length}</p>
        </div>
    );
}

export default Navbar;