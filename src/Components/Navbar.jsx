import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#6f42c1" }}>
            <div className="container-fluid">
                <a className="navbar-brand text-white" href="/">
                    MyApp
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
                                style={({ isActive }) => ({
                                    color: isActive ? "#fff" : "#e6e6fa",
                                    fontWeight: isActive ? "bold" : "normal",
                                })}
                                end
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/dictionary"
                                className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
                                style={({ isActive }) => ({
                                    color: isActive ? "#fff" : "#e6e6fa",
                                    fontWeight: isActive ? "bold" : "normal",
                                })}
                            >
                                Dictionary
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/notes"
                                className={({ isActive }) => `nav-link${isActive ? " active" : ""}`}
                                style={({ isActive }) => ({
                                    color: isActive ? "#fff" : "#e6e6fa",
                                    fontWeight: isActive ? "bold" : "normal",
                                })}
                            >
                                Notes
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
