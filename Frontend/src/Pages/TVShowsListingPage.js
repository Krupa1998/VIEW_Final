import React, { useState } from 'react'
import Header from '../components/NavigationBar/Header';
import Searchbox from '../components/SearchBox/searchbox';
import TVShowsListing from '../components/TVShowsListingSection/TVShowsListing';
import Footer from '../components/Footer/Footer';

const TVShowsListingPage = ({ tvshows, key }) => {

    const [showSearchResult, setShowSearchResult] = useState(false);

    const onSearchCall = (searchFlag) => {
        setShowSearchResult(searchFlag);
    }

    return (
        <div className="container">
            <Header />
            <Searchbox onSearchCall={onSearchCall} />
            {!showSearchResult && (<main>
                <TVShowsListing key={key} tvshows={tvshows} />
                <hr />
            </main>)}
            <Footer />
        </div>
    )
}

export default TVShowsListingPage
