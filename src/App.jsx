// App.js
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Dictionary from "./Screens/Dictionary";
import Error from "./Screens/Error";
import Home from "./Screens/Home";
import Notes from "./Screens/Notes";
import Navbar from "./Components/Navbar";

const App = () => {
    return (
        <Router>
          <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dictionary" element={<Dictionary />} />
                <Route path="/notes" element={<Notes />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </Router>
    );
};

export default App;
