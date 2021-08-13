import React, { useState } from 'react'
import Header from '../components/NavigationBar/Header';
import Searchbox from '../components/SearchBox/searchbox';
import MoviesListing from '../components/MoviesListingSection/MoviesListing';
import Footer from '../components/Footer/Footer';

const MoviesListingPage = ({ movies, key }) => {

    const [showSearchResult, setShowSearchResult] = useState(false);

    const onSearchCall = (searchFlag) => {
        setShowSearchResult(searchFlag);
    }

    return (
        <div className="container">
            <Header />
            <Searchbox onSearchCall={onSearchCall} />
            {!showSearchResult && (<main>
                <MoviesListing key={key} movies={movies} />
                <hr />
            </main>)}
            <Footer />
        </div>
    )
}

export default MoviesListingPage
