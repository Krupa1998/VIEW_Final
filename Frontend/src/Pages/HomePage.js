import React, { useState } from 'react'
import Header from '../components/NavigationBar/Header';
import Searchbox from '../components/SearchBox/searchbox';
import HeroSection from '../components/HeroSection/HeroSection';
import FeaturedMovies from '../components/FeaturedMovieSection/FeaturedMovies';
import FeaturedTVShows from '../components/FeaturedTvSection/FeaturedTVShows';
import Content from '../components/ContentSection/Content';
import img1 from '../assets/img/content1.jpg';
import img2 from '../assets/img/content2.jpg';
import Footer from '../components/Footer/Footer';

const HomePage = ({ videos, key }) => {

    const [showSearchResult, setShowSearchResult] = useState(false);

    const onSearchCall = (searchFlag) => {
        setShowSearchResult(searchFlag);
    }

    return (

        <div className="container" >

            <Header />
            <Searchbox onSearchCall={onSearchCall} />
            {!showSearchResult && (<main>
                <HeroSection />
                <hr />
                <FeaturedMovies key={key} movies={videos.filter((video) => {
                    return video.type === 1 && video.featured;
                })} />
                <hr />
                <Content image={img1} />
                <hr />
                <FeaturedTVShows key={key} tvshows={videos.filter((video) => {
                    return video.type === 2 && video.featured;
                })} />
                <hr />
                <Content image={img2} />
                <hr />
            </main>)}
            <Footer />

        </div >

    )
}

export default HomePage
