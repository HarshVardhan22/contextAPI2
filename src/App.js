import React from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import {MovieProvider} from './MovieContext';
import AddMovie from './AddMovie';

function App() {

  return (
    <MovieProvider>
    <div>
      <Navbar/>
      <AddMovie/>
      <MovieList/>
     
    </div>
    </MovieProvider>
  );
}

export default App;
