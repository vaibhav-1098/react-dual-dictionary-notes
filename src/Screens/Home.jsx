import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div
            className="container-fluid text-center"
            style={{ padding: "50px 0", backgroundColor: "#f8f9fa" }}
        >
            <div className="container">
                <h1 className="display-4 text-primary mb-4">Welcome to MyApp</h1>
                <p className="lead text-secondary mb-5">
                    Explore our features and discover what we have to offer.
                </p>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title text-dark">Dictionary</h5>
                                <p className="card-text text-muted">
                                    Access and explore a comprehensive dictionary with detailed word
                                    definitions and usage examples.
                                </p>
                                <Link to="/dictionary" className="btn btn-primary">
                                    Go to Dictionary
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 mb-4">
                        <div className="card shadow-sm">
                            <div className="card-body">
                                <h5 className="card-title text-dark">Notes</h5>
                                <p className="card-text text-muted">
                                    Manage and keep track of your personal notes with our
                                    easy-to-use note-taking application.
                                </p>
                                <Link to="/notes" className="btn btn-primary">
                                    Go to Notes
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
