import React from 'react'
import Header from '../components/NavigationBar/Header';
import Dashboard from '../components/DashboardPage/Dashboard';
import Footer from '../components/Footer/Footer';

const DashboardPage = () => {
    return (
        <div className="container">
            <Header />
            <main>
                <Dashboard />
                <hr />
            </main>
            <Footer />
        </div>
    )
}

export default DashboardPage
