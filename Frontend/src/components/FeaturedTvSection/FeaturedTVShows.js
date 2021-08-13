import React from 'react'
import './FeaturedTVShows.css';
import { Link } from "react-router-dom";

const FeaturedTVShows = ({ tvshows }) => {
    return (

        <div className="container featuredTVContainer">

            <h4>Featured TV Shows</h4>

            <div className="d-flex justify-content-around c-container">

                {tvshows.map((show) => (
                    <div className="container">

                        <Link to={`/videos/${show.id}`}>
                            <img className="rounded img-fluid tvPoster" src={show.poster} alt={show.title} />
                        </Link>

                    </div>

                ))}
            </div>

        </div>

    )
}

export default FeaturedTVShows