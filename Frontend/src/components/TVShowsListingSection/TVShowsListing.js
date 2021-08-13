import React from 'react'
import './TVShowsListing.css';
import { Link } from "react-router-dom";

const TVShowsListing = ({ tvshows }) => {
    return (
        <div>

            <h1 className="center">TV Shows</h1><br />

            <div className="row justify-content-first tvshowItemContainer">

                {tvshows.map((show) => (
                    <div className="col-6 col-md-4 col-lg-2 tvshowItemContainer">

                        <div className="text-center">

                            <Link to={`/videos/${show.id}`}>
                                <img className="rounded tvListImage" src={show.poster} alt={show.title} />
                            </Link>

                        </div>

                    </div>
                ))}

            </div>

        </div>
    )
}

export default TVShowsListing
