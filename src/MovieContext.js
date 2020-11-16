import React,{createContext,useState} from 'react';

export const MovieContext = createContext();

export const MovieProvider = (props) =>{
    const [movies,setMovies] = useState([
        {
          name: "Prestige",
          price:300,
          id:1
        },
        {
          name: "Sholay",
          price:350,
          id:2
        },
        {
          name:"Gangs of Wasseypur",
          price:3000,
          id:3
        }
      
    ])

    
    return(
        <MovieContext.Provider value={[movies,setMovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}

 