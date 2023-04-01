import React, { useState } from "react";
import { Link } from "react-router-dom";

function TopNav() {
    const [showProjects, setShowProjects] = useState(false);
    const toggleProjects = () => setShowProjects(!showProjects)

    const projects = (
        <div>
            <p>-</p>
            <button id="navButtons"><Link to="/swiftle-wordle" id="navButtons">Swiftle</Link></button><br></br>
            <button id="navButtons"><Link to="/book-it" id="navButtons">Book It</Link></button><br></br>
            <button id="navButtons"><Link to="/my-booknook" id="navButtons">My Booknook</Link></button><br></br>
            <button id="navButtons"><Link to="/harvardX" id="navButtons">HarvardX CS50x</Link></button><br></br>
        </div>
    )

    return (
        <nav class="navbar navbar-inverse" style={{ backgroundColor: '#f9faff', border: 'none' }}>
            <div class="container-fluid">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>                        
                    </button>
                </div>
                <div class="collapse navbar-collapse" id="myNavbar">
                    <ul class="nav navbar-nav">
                        <li>
                            <a id="navLink" href="/" style={{ textDecoration: 'none' }}>Amber Martinez</a>
                        </li>
                        <li>
                            <a id="navLink" href="/about-me" style={{ textDecoration: 'none' }}>About Me</a>
                        </li>
                        <li class="dropdown">
                            <a id="navLink" class="dropdown-toggle" data-toggle="dropdown" href="/swiftle-wordle" style={{ backgroundColor: 'transparent', textDecoration: 'none' }}>Work<span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu">
                                <li><a href="/swiftle-wordle" style={{ textDecoration: 'none' }}>Swiftle</a></li>
                                <li><a href="/book-it" style={{ textDecoration: 'none' }}>Book It</a></li>
                                <li><a href="/my-booknook" style={{ textDecoration: 'none' }}>My Booknook</a></li>
                                <li><a href="/harvardX" style={{ textDecoration: 'none' }}>HarvardX CS50x</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default TopNav;