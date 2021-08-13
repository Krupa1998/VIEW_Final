import React, { useEffect, useState } from 'react'
import './TVShowDetails.css';

import Loader from '../LoaderComponent/CustomizedLoader'
import { useParams } from 'react-router-dom';

const TVShowDetails = () => {

    const { id } = useParams();

    const [tvshow, setTVShow] = useState({});
    const [isloading, setIsLoading] = useState(false);


    useEffect(() => {

        fetch(`https://view-api-backend.herokuapp.com/videos/${id}`)
            .then((res) => {
                setIsLoading(true);
                return res.json();
            })
            .then((data) => {
                setTVShow(data.body[0]);
                setIsLoading(false);
            })
            .catch((err) => {
                console.log(err.message);
            })

    }, [id])

    return (
        <div className="tvDetailsContainer">

            {isloading && (<Loader />)}

            <img src={tvshow.backgroundimg} width="100%" height="500px" alt={tvshow.title} />
            <hr />
            <div>
                <h1>{tvshow.title}</h1> <br />
                <div className="container">
                    <div className="col-sm-12 col-lg-12">
                        <div className="row">

                            <div className="col-lg-8 col-6">

                                <h3>Director :</h3>
                                <p>{tvshow.director}</p>
                                <h3>Stars :</h3>
                                <p>{tvshow.stars}</p>
                                <h3>Genre :</h3>
                                <p>{tvshow.genre}</p>
                                <h3>Release :</h3>
                                <p>{tvshow.release}</p>
                                <h3>Rating :</h3>
                                <p>{tvshow.rating} from IMDb</p>
                                <h3>Story :</h3>
                                <p>{tvshow.story}</p>

                                <br />

                            </div>

                            <div className="col-lg-4 col-5 justify-content-around tvImageContainer">

                                <div className="row">
                                    <img className="tvImage" src={tvshow.poster} alt={tvshow.title} />
                                </div>

                                <div className="row tvPriceContainer text-center">
                                    <div className="col-12 col-md-6">
                                        <form>
                                            <button className="btn btn-primary btn-lg" onClick={() => {
                                                alert(`You've rented ${tvshow.title} at $${tvshow.rent}`)
                                            }} >Rent Season ${tvshow.rent}</button>
                                        </form>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <form>
                                            <button className="btn btn-primary btn-lg" onClick={() => {
                                                alert(`You've bought ${tvshow.title} at $${tvshow.buy}`)
                                            }}>Buy Season ${tvshow.buy}</button>
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

export default TVShowDetails
