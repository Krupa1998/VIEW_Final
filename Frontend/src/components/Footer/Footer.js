import React from 'react'
import './Footer.css';
import logo from '../../assets/img/logo1.png';
import { Link } from "react-router-dom";
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

const Footer = () => {
    return (
        <div>
            <footer className="footer">

                <div className="footer-left col-md-4 col-sm-6">

                    <p className="about">
                        <span> About the website</span>
                        This is a website that provides the ultimate source of entertainment to our users.
                        Take a chill pill and binge watch your favourite Movie or TV Show today!
                    </p>

                </div>

                <div className="footer-center col-md-4 col-sm-6">

                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p><span> 1974 Queen St </span> Toronto, Canada</p>
                    </div>
                    <div>
                        <i className="fa fa-phone"></i>
                        <p>+​1 604 555 5555</p>
                    </div>
                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><a href=""> view@admin.com</a></p>
                    </div>


                </div>

                <div className="footer-right col-md-4 col-sm-6">


                    <Link className="logo" to="/">
                        <h1 class="logo-title">View</h1>
                    </Link>
                    
                    <p className="menu">
                        <a href="/"> Home</a> &nbsp;|
                        <a href="/movies"> &nbsp; Movies</a> &nbsp;|
                        <a href="/tvshows"> &nbsp; TV Shows</a>
                    </p>

                </div>

                <p className="name"> VIEW &copy; 2021</p>

            </footer>
        </div>

    )
}

export default Footer
