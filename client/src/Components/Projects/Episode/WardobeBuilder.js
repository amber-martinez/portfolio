import React from "react";
import video from "./videos/WardrobeBuilder.mp4"

function WardrobeBuilder() {
    return (
        <div style={{ marginBottom: 20 }}>
            <h3>Wardrobe Builder</h3>
            <hr></hr>
            <table>
                <tr>
                    <td style={{ verticalAlign: 3 }}>
                        <p>
                            This feature allows players to:
                            <ul>
                                <li>Build a wardrobe of outfits they can use throughout the story they're currently reading</li>
                                <li>Purchase any clothes they had not yet added during any visit to the wardrobe</li>
                            </ul>
                            The key in this feature was the promise and fulfillment of purchasing an outfit that will last for the rest of the story. Plus, as we repeatedly showed them the outfits they had not yet purchased, they often converted and bought most of the outfits by the end of the story. This was planned on the basis of repeated information being perceived as more truthful.
                            <br></br><br></br>
                            <h4>Results</h4>
                            <ul>
                                <li>Increased monetization by ~25% across all chapters in a story</li>
                                <li>Doubled monetization in first chapter of story</li>
                            </ul>
                            <br></br>
                        </p>
                    </td>
                    <td>
                        <video src={video} controls></video>
                        <br></br>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default WardrobeBuilder;