import React from 'react'
import Header from '../components/NavigationBar/Header';
import TVShowDetails from '../components/TVShowDetailsSection/TVShowDetails';
import Footer from '../components/Footer/Footer';

const TVShowDetailsPage = () => {
    
    return (
        <div className="container">
            <Header />
            <main>
                <TVShowDetails />
                <hr />
            </main>
            <Footer />
        </div>
    )
}

export default TVShowDetailsPage
