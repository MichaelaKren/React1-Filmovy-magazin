import React from "react";
import movies from '../../movie-database.js';
import {NavLink} from 'react-router-dom';
import './style.css';

const MovieList = () => (  
    <nav className="movie-list">
        {movies.map((film) => {
            return (
            <NavLink
                to={`/movies/${film.id}`}
                className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                }
                key={film.id}
                >
                {film.title}
            </NavLink>              
            )
        })}
    </nav>  
)

export default MovieList;