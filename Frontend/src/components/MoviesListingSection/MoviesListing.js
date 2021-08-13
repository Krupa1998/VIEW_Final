import React from 'react'
import './MoviesListing.css';
import { Link } from "react-router-dom";

const MoviesListing = ({ movies }) => {

    return (
        <div className="movieListContainer">

            <h1 className="center">Movies</h1><br />

            <div className="row justify-content-first movieItemContainer">

                {movies.map((movie) => (
                    <div className="col-md-4 col-lg-2 movieItemContainer">

                        <div className="text-center">

                            <Link to={`/videos/${movie.id}`}>
                                <img className="rounded movieListImage" src={movie.poster} alt={movie.title} />
                            </Link>

                        </div>

                    </div>
                ))}

            </div>

        </div >
    )
}

export default MoviesListing
