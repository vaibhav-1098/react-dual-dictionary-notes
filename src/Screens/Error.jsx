import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div
            className="d-flex flex-column justify-content-center align-items-center"
            style={{ height: "100vh", backgroundColor: "#f8f9fa" }}
        >
            <h1 className="display-1 text-danger">404</h1>
            <h2 className="text-dark">Page Not Found</h2>
            <p className="text-muted">
                Sorry, the page you are looking for does not exist. It might have been moved or
                deleted.
            </p>
            <Link to="/" className="btn btn-primary mt-3">
                Go Back Home
            </Link>
        </div>
    );
};

export default Error;
