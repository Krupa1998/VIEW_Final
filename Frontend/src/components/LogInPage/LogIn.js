import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './LogIn.css';

const LogIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validateEmail, setValidatedEmail] = useState();
    const [validatePassword, setValidatedPassword] = useState();

    const emailHandler = (event) => {
        setEmail(event.target.value);
    }

    const passwordHandler = (event) => {
        setPassword(event.target.value);
    }

    const validateEmailHandler = () => {
        setValidatedEmail(email.includes("@"));
    }

    const validatePasswordHandler = () => {
        setValidatedPassword(password.trim().length >= 8);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        fetch(`https://view-api-backend.herokuapp.com/auth`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                if (data.message === "Login Successful") {
                    localStorage.setItem("userId", data.body[0].id);
                    localStorage.setItem("userLogin", true);
                    alert("Login Successful");
                    window.location.pathname = "/dashboard";
                } else {
                    alert("Login Failed!");
                }
            })
            .catch((err) => {
                console.log(err.message);
            })
    }

    return (
        <div className="container">
            <div className="login mt-5">

                <div className="mt-5 text-center">
                    <h1 className="title">Login</h1>
                    <p className="card-subtitle">
                        Don't have an account? Join us{" "}
                        <Link to="/signup" className="card-link">
                            Here
                        </Link>
                    </p>
                </div>

                <form method="POST" onSubmit={submitHandler}>

                    <div className="d-flex justify-content-center">
                        <div className="col-8 mb-4 mt-3">
                            <div className={`${validateEmail === false ? "invalid" : ""}`}>
                                <label className="form-label" htmlFor="email">
                                    Email{" "}
                                </label>
                                <input className="form-control" value={email} onChange={emailHandler}
                                    onBlur={validateEmailHandler} required />
                                {validateEmail === false && <p>Please enter valid email.</p>}
                            </div>

                        </div>
                    </div>

                    <div className="d-flex justify-content-center">
                        <div className="col-8 mb-4">
                            <div className={`${validatePassword === false ? "invalid" : ""}`}>
                                <label className="form-label" htmlFor="password">
                                    Password
                                </label>
                                <input type="password" className="form-control" value={password} onChange={passwordHandler}
                                    onBlur={validatePasswordHandler} required />
                                {validatePassword === false && <p>Password must be 8 characters long.</p>}
                            </div>

                        </div>
                    </div>

                    <div className="d-flex justify-content-center">
                        <div className="col-sm-8 ">
                            <div className="form-check">
                                <label className="form-check-label" htmlFor="rememberMe">
                                    {" "}
                                    Remember me{" "}
                                </label>
                                <input className="form-check-input" type="checkbox" />
                            </div>
                        </div>
                    </div>

                    <div className="mb-5 d-flex justify-content-center">
                        <button type="submit" className="btn login mb-4">
                            Login
                        </button>
                    </div>

                </form>

            </div>
        </div >
    )
}

export default LogIn
