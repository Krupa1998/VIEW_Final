import React from 'react'
import Header from '../components/NavigationBar/Header';
import SignUp from '../components/SingUpPage/SignUp';
import Footer from '../components/Footer/Footer';

const SignUpPage = () => {
    return (
        <div className="container">
            <Header />
            <main>
                <SignUp />
                <hr />
            </main>
            <Footer />
        </div>
    )
}

export default SignUpPage
