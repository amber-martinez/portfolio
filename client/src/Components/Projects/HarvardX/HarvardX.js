import React from "react";
import CPrograms from "./CPrograms";

function HarvardX() {
    return (
        <div id="project">
            <h1 style={{ lineHeight: 0 }}>HarvardX CS50x Problem Sets / Labs</h1>
            <p style={{ lineHeight: 3.8, fontWeight: 1000 }}><i>Problem sets, labs, and programs I’ve completed so far in my HarvardX CS50x course.</i></p>
            <h3>Programs in <u>C</u></h3>
            {<CPrograms />}
        </div>
    )
}

export default HarvardX;