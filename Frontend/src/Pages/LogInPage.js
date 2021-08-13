import React from 'react'
import Header from '../components/NavigationBar/Header';
import LogIn from '../components/LogInPage/LogIn';
import Footer from '../components/Footer/Footer';

const LogInPage = () => {
    return (
        <div className="container">
            <Header />
            <main>
                <LogIn />
                <hr />
            </main>
            <Footer />
        </div>
    )
}

export default LogInPage
