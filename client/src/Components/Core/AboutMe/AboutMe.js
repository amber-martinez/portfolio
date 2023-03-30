import React from "react";
import Accomplishments from "./Accomplishments";
import Bio from "./Bio";
import Education from "./Education";
import Hobbies from "./Hobbies";

function AboutMe() {

    return (
        <div id="project">
            <div>
                <div class="right">
                    <img src="https://i.imgur.com/mIqd7it.jpg" id="headshot"></img>
                </div>
                <div class="left">
                    <Bio/>
                    <Accomplishments/>
                    <Education/>
                    <Hobbies/>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;