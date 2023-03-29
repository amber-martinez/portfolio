import React from "react";
import Accomplishments from "./Accomplishments";
import Bio from "./Bio";
import Education from "./Education";
import Hobbies from "./Hobbies";

function AboutMe() {

    return (
        <div id="project">
            <img src="https://i.imgur.com/mIqd7it.jpg" style={{ height: 230, objectFit: 'cover', borderRadius: "59%", border: "1px #dcdee8 solid", right: "45%", position: "absolute", opacity: "98%" }}></img>
            <Bio/>
            <Accomplishments/>
            <Education/>
            <Hobbies/>
        </div>
    )
}

export default AboutMe;