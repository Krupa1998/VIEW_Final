import React, { useState, useEffect } from 'react';
import './Dashboard.css';

const Dashboard = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        fetch(`https://view-api-backend.herokuapp.com/users/${localStorage.getItem("userId")}`)
            .then(res => res.json())
            .then((data) => {
                setFirstName(data.body[0].firstName);
                setLastName(data.body[0].lastName);
                setEmail(data.body[0].email);
            })
            .catch((err) => {
                console.log(err.message);
            })
    }, []);

    return (
        <div className="container">
            <div className="dashboard mt-5">

                <div className="mt-5 text-center">
                    <h1 class="title">User Dashboard</h1>
                </div>

                <form>

                    <div className="d-flex justify-content-center">
                        <div className="col-8 mb-2 mt-3">
                            <label className="form-label">
                                First Name
                            </label>
                            <input className="form-control" value={firstName} />
                        </div>
                    </div>

                    <div className="d-flex justify-content-center">
                        <div className="col-8 mb-2 mt-3">
                            <label className="form-label">
                                Last Name
                            </label>
                            <input className="form-control" value={lastName} />
                        </div>
                    </div>

                    <div className="d-flex justify-content-center">
                        <div className="col-8 mb-4 mt-3">
                            <label className="form-label">
                                Email
                            </label>
                            <input className="form-control" value={email} />
                        </div>
                    </div>

                </form>

            </div>
        </div>
    )
}

export default Dashboard
