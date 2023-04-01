import React from "react";
import CPrograms from "./CPrograms";

function HarvardX() {
    return (
        <div id="project">
            <h1 id="projectHeader">HarvardX CS50x Problem Sets / Labs</h1>
            <p id="projectSub"><i>Problem sets, labs, and programs I’ve completed so far in my HarvardX CS50x course.</i></p>
            <h3>Programs in <u>C</u></h3>
            {<CPrograms />}
        </div>
    )
}

export default HarvardX;