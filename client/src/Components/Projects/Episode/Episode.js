import React from "react";
import video from "./AvatarSpace.mp4"

function Episode() {

    return (
        <div id="project">
            <h1 id="projectHeader">Episode Interactive</h1>
            <p id="projectSub"><i>Donacode</i></p>
            <p>
                I've worked on shipping new features on the most successful storytelling game, Episode Interactive for over 3.5 years now. My specialty is driving monetization and retention to enhance the user experience. I also created and maintain a library of code to decrease production time.
                <br></br>
                Keeping in mind that avatar personalization is our major driver in monetization, here are a few features I've implemented:
                {/* <ul>
                    <li>Wardrobe Builder
                        <ul>
                            <li>Increased monetization by ~25% across all chapters in a story</li>
                            <li>Increased monetization by double in first chapter of story</li>
                        </ul>
                    </li>
                    <li>Interactive Onboarding Experience</li>
                    <li>Avatar Space</li>
                </ul> */}
                <br></br>
            </p>
            
            <h3>Wardrobe Builder</h3>
            <p>
                This feature allows players to:
                <ul>
                    <li>Build a wardrobe of outfits they can use throughout the story they're currently reading</li>
                    <li>Purchase any clothes they had not yet added during any visit to the wardrobe</li>
                </ul>
                The key in this feature was the promise and fulfillment of purchasing an outfit that will last for the rest of the story. Plus, as we repeatedly showed them the outfits they had not yet purchased, they often converted and bought most of the outfits by the end of the story. This was planned on the basis of repeated information being perceived as more truthful.
                <br></br><br></br>
            </p>

            <div>
                <video src={video} controls height="600px" width="autp"></video>
            </div>
        </div>
    )
}

export default Episode;