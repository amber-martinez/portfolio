import React from "react";
import WardrobeBuilder from "./WardobeBuilder";
import Onboarding from "./Onboarding";
function Episode() {
    return (
        <div id="project">
            <h1 id="projectHeader">Episode Interactive</h1>
            <p id="projectSub"><i>Donacode</i></p>
            <p>
                I've worked on shipping new features on the most successful storytelling game, Episode Interactive for over 3.5 years now. My specialty is driving monetization and retention to enhance the user experience. I also created and maintain a library of code to decrease production time.
                <br></br>
                Here are a couple of features I've developed:
            </p>
            <br></br>
            <WardrobeBuilder/>
            <Onboarding/>
        </div>
    )
}

export default Episode;