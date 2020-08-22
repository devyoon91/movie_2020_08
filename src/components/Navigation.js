import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation(){
    return (
        <div className="nav">
            <Link to="/movie_2020_08/">Home</Link>
            <Link to="/movie_2020_08/about">About</Link>
        </div>
    );
}

export default Navigation;