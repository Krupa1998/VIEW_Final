/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './Header.css';
import logo from '../../assets/img/logo1.png';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

import { Link } from "react-router-dom";

const Header = () => {

    const logout = () => {
        localStorage.clear("userId");
        localStorage.clear("userLogin");
        window.location.pathname = "/";

    }

    return (

        <div className="topnav">

            {/* <Link className="logo" to="/"><img src={logo} width="120px" height="75x" /></Link> */}
            <div className="logo1">

                <Link className="logo" to="/">

                    <img src={logo} width="100px" height="60x" style={{ float: 'left' }} />
                    <div style={{ float: 'right', paddingTop: '0px', marginLeft: "-15px" }}><h1 class="logo-title">iew</h1></div>

                </Link>
            </div>
            <div className="header">
                <Link to="/movieslist">Movies</Link>
                <Link to="/tvlist">TV</Link>
            </div>

            <div className="header-right">
                {localStorage.getItem("userLogin") === "true" ?
                    (<Link to="/dashboard">
                        Dashboard
                    </Link>) :
                    (<Link to="/login">
                        Log In
                    </Link>)
                }

                {localStorage.getItem("userLogin") === "true" ?
                    (<Link onClick={logout}>
                        Logout
                    </Link>) :
                    (<Link to="/signup">
                        Sign Up
                    </Link>)
                }

            </div>

        </div >

    )

}

export default Header
