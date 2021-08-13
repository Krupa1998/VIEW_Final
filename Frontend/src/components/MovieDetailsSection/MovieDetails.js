import React, { useEffect, useState } from 'react'
import './MovieDetails.css';
import { useParams } from "react-router-dom"

import Loader from '../LoaderComponent/CustomizedLoader'

const MovieDetails = () => {

    const [movie, setMovie] = useState({});
    const [isloading, setIsLoading] = useState(false);

    const { id } = useParams();

    useEffect(() => {

        fetch(`https://view-api-backend.herokuapp.com/videos/${id}`)
            .then((res) => {
                setIsLoading(true);
                return res.json();
            })
            .then((data) => {
                setMovie(data.body[0]);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err.message);
            })

    }, [id])


    return (
        <div className="movieDetailsContainer">

            {isloading && (<Loader />)}

            <img src={movie.backgroundimg} width="100%" height="500px" alt={movie.title} />
            <hr />
            <div>
                <h1>{movie.title}</h1> <br />
                <div className="container">
                    <div className="col-sm-12 col-lg-12">
                        <div className="row">

                            <div className="col-lg-8 col-6">

                                <h3>Director :</h3>
                                <p>{movie.director}</p>
                                <h3>Stars :</h3>
                                <p>{movie.stars}</p>
                                <h3>Genre :</h3>
                                <p>{movie.genre}</p>
                                <h3>Release :</h3>
                                <p>{movie.release}</p>
                                <h3>Rating :</h3>
                                <p>{movie.rating} from IMDb</p>
                                <h3>Story :</h3>
                                <p>{movie.story}</p>

                                <br />

                            </div>

                            <div className="col-lg-4 col-5 justify-content-around movieImageContainer">

                                <div className="row">
                                    <img className="movieImage" src={movie.poster} alt={movie.title} />
                                </div>

                                <div className="row tvPriceContainer text-center">
                                    <div className="col-12 col-md-6">
                                        <form>
                                            <button className="btn btn-primary btn-lg" onClick={() => {
                                                alert(`You've rented ${movie.title} at $${movie.rent}`)
                                            }} >Rent ${movie.rent}</button>
                                        </form>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <form>
                                            <button className="btn btn-primary btn-lg" onClick={() => {
                                                alert(`You've rented ${movie.title} at $${movie.buy}`)
                                            }}>Buy ${movie.buy}</button>
                                        </form>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails
