import React, { useState, useEffect } from 'react'
import '../assets/css/App.css';
import HomePage from '../Pages/HomePage';
import LogInPage from '../Pages/LogInPage';
import SignUpPage from '../Pages/SignUpPage';
import DashboardPage from '../Pages/DashboardPage';
import MoviesListingPage from '../Pages/MoviesListingPage';
import TVShowsListingPage from '../Pages/TVShowsListingPage';
import MovieDetailsPage from '../Pages/MovieDetailsPage';
import TVShowDetailsPage from '../Pages/TVShowDetailsPage';
import Loader from '../components/LoaderComponent/CustomizedLoader';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const App = () => {

  const [videos, setVideos] = useState([]);
  const [isloading, setIsLoading] = useState(false);

  useEffect(() => {
    getAllVideos();
  }, [])

  const getAllVideos = () => {
    fetch(`https://view-api-backend.herokuapp.com/videos`)
      .then((res) => {
        setIsLoading(true);
        return res.json();
      })
      .then((data) => {
        setVideos(data.body);
        setIsLoading(false);
      })
  }

  return (

    <Router>

      <Switch>

        <Route exact path="/">
          {isloading ? (<Loader />) : <HomePage key={videos.id} videos={videos} />}
        </Route>

        <Route path="/login">
          {localStorage.getItem("userLogin") === "true" ?
            (<Redirect to="/" />)
            :
            (<LogInPage />)
          }
        </Route>

        <Route path="/signup">
          {localStorage.getItem("userLogin") === "true" ?
            (<Redirect to="/" />)
            :
            (<SignUpPage />)
          }
        </Route>

        <Route path="/dashboard">
          {localStorage.getItem("userLogin") === "true" ?
            (<DashboardPage />)
            :
            (<Redirect to="/login" />)
          }
        </Route>

        <Route path="/movieslist">
          {isloading ? (<Loader />) : <MoviesListingPage key={videos.id} movies={videos.filter((video) => video.type === 1)} />}
        </Route>

        <Route path="/tvlist">
          {isloading ? (<Loader />) : <TVShowsListingPage key={videos.id} tvshows={videos.filter((video) => video.type === 2)} />}
        </Route>

        <Route path="/videos/:id">
          <MovieDetailsPage />
        </Route>

        <Route path="/videos/:id">
          <TVShowDetailsPage />
        </Route>

      </Switch>

    </Router >

  )
}

export default App
