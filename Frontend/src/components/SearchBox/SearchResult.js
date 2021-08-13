import React from 'react'
import { Link } from "react-router-dom";

const SearchResult = ({ videos }) => {
    return (
        <div className="container">

            <div className="row justify-content-first">

                {videos.map((video) => (
                    <div className="col-md-4 col-lg-2">

                        <div className="text-center">

                            <Link to={`/videos/${video.id}`}>
                                <img className="rounded movieListImage" src={video.poster} alt={video.title} />
                            </Link>

                        </div>

                    </div>
                ))}

            </div>

        </div >
    )
}

export default SearchResult
