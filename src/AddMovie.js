import React, {useContext,useState} from 'react';
import {MovieContext} from './MovieContext';

import "./AddMovie.css";

const AddMovie = () =>{
    const [name,setName] = useState('');
    const [price,setPrice] = useState('');
    const [movies,setMovies] = useContext(MovieContext)
    
    function changeName(e){
        setName(e.target.value)
    }
    function changePrice(e){
        setPrice(e.target.value)
    }
    const add = e => {
        e.preventDefault();
        setMovies(prevMovies=>([...prevMovies,{name:name,price:price,id:9}]))
    }
    return(
        <div>
            <form onSubmit={add}>
            <input type="text" placeholder='Enter Movie Name' value={name} onChange={changeName}/>
            <input type="text" placeholder='Enter Movie Price' value={price} onChange={changePrice}/>
            <button>Submit</button>
            </form>
            
        </div>
    )
}

export default AddMovie;