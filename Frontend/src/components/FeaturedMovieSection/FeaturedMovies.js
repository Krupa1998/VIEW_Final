import React from 'react'
import './FeaturedMovies.css';
import { Link } from "react-router-dom";

const FeaturedMovies = ({ movies }) => {

    return (

        <div className="container featuredMoviesContainer">

            <h4>Featured Movies</h4>

            <div className="d-flex justify-content-around c-container">



                {movies.map((movie) => (

                    <div className="container">
                        <Link to={`/videos/${movie.id}`}>
                            <img className="rounded img-fluid moviePoster" src={movie.poster} alt={movie.title} />
                        </Link>
                    </div>

                ))}


            </div>

        </div>

    )
}

export default FeaturedMovies