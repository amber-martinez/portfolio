import React, { useState } from "react";
import { Link } from "react-router-dom";

function Nav() {
    const [showProjects, setShowProjects] = useState(false);
    const toggleProjects = () => setShowProjects(!showProjects)

    const projects = (
        <div>
            <p>-</p>
            <button id="navButtons"><Link to="/swiftle-wordle" id="navButtons">Swiftle</Link></button><br></br>
            <button id="navButtons">Book It</button><br></br>
            <button id="navButtons">My Booknook</button><br></br>
            <button id="navButtons">HarvardX CS50x</button>
        </div>
    )

    return (
        <div>
            <div id="navRight">
                <Link to="/" id="navButtons">
                    <button id="navButtons"><img src='https://i.imgur.com/8NpxX3B.png' style={{ height: 16 }}></img></button>
                </Link>   
                <br></br>
                <button id="navButtons">About Me</button>
                <br></br>
                <button id="navButtons" onClick={toggleProjects}>Work</button>
                {showProjects ? projects : null}
            </div>
            <div id="navBottom">
                <a target="_blank" href="https://github.com/amber-martinez">
                    <button id="navButtons">
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" style={{ height: 27 }}></img>
                    </button>
                </a><br></br>
                <a target="_blank" href="https://www.linkedin.com/in/amber-martinez-g/">
                    <button id="navButtons">
                        <img src="https://www.edigitalagency.com.au/wp-content/uploads/new-linkedin-logo-white-black-png.png" style={{ height: 28 }}></img>
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Nav;