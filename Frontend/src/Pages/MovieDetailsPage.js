import React from 'react'
import Header from '../components/NavigationBar/Header';
import MovieDetails from '../components/MovieDetailsSection/MovieDetails';
import Footer from '../components/Footer/Footer';


const MovieDetailsPage = () => {

    return (
        <div className="container">
            <Header />
            <main>
                <MovieDetails />
                <hr />
            </main>
            <Footer />
        </div>
    )
}

export default MovieDetailsPage
