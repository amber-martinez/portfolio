import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
    const [showProjects, setShowProjects] = useState(false);
    const toggleProjects = () => setShowProjects(!showProjects)

    const projects = (
        <div>
            <p>-</p>
            <button id="navButtons"><Link to="/spotify-me" id="navButtons">Spotify Me</Link></button><br></br>
            <button id="navButtons"><Link to="/swiftle-wordle" id="navButtons">Swiftle</Link></button><br></br>
            <button id="navButtons"><Link to="/book-it" id="navButtons">Book It</Link></button><br></br>
            <button id="navButtons"><Link to="/my-booknook" id="navButtons">My Booknook</Link></button><br></br>
            <button id="navButtons"><Link to="/harvardX" id="navButtons">HarvardX CS50x</Link></button><br></br>
            <button id="navButtons"><Link to="/episode" id="navButtons">Episode Interactive (game)</Link></button><br></br>
        </div>
    )

    return (
        <div>
            <div id="navRight">
                <Link to="/" id="navButtons">
                    <button id="navButtons"><img src='https://i.imgur.com/8NpxX3B.png' alt="home icon" style={{ height: 16 }}></img></button>
                </Link>   
                <br></br>
                <button id="navButtons"><Link to="/about-me" id="navButtons">About Me</Link></button><br></br>
                <button id="navButtons" onClick={toggleProjects}>Work</button>
                {showProjects ? projects : null}
            </div>
            <div id="navBottom">
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/amber-martinez">
                    <button id="navButtons">
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub icon" style={{ height: 27 }}></img>
                    </button>
                </a><br></br>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/amber-martinez-g/">
                    <button id="navButtons">
                        <img src="https://www.edigitalagency.com.au/wp-content/uploads/new-linkedin-logo-white-black-png.png" alt="LinkedIn icon" style={{ height: 28 }}></img>
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Nav;