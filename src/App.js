import React from "react";
import MovieList from "./MovieList";
import Navbar from "./Navbar";
import {MovieProvider} from './MovieContext';

function App() {

  return (
    <MovieProvider>
    <div>
      <Navbar/>
      <MovieList/>
    </div>
    </MovieProvider>
  );
}

export default App;
