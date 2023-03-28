import React from "react";

function Nav() {
    return (
        <div>
            <div id="navRight">
                <button id="navButtons">about me</button>
                <br></br>
                <button id="navButtons">projects</button>
            </div>
            <div id="navBottom">
                <a target="_blank" href="https://github.com/amber-martinez">
                    <button id="navButtons">
                        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" style={{ height: 27 }}></img>
                    </button>
                </a>
                <br></br>
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