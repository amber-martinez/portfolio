import React from "react";
import video from "./videos/Onboarding.mp4"

function Onboarding() {
    return (
        <div style={{ marginBottom: 20 }}>
            <h3>Interactive Onboarding Experience</h3>
            <hr></hr>
            <table>
                <tr>
                    <td style={{ verticalAlign: 3 }}>
                        <p>
                            This initiative:
                            <ul>
                                <li>Reimagines the onboarding experience (what players who just download the game first experience)</li>
                                <li>Replaced the static welcome page with an animated carousel of stories to choose from</li>
                            </ul>
                            The idea was to enhance the experience a new player has when they first open the game. In order to make a better first impression, I developed an interactive and animated carousel that lets readers pick a story while already being immersed in the story. The animations and visuals are directly from the story being offered to them. We found that this also helped direct them into a story they invested more in, presumably because they had a better idea of what they were choosing.
                            <br></br><br></br>
                            <h4>Results</h4>
                            <ul>
                                <li>~2% increase in cumulative ARPU</li>
                            </ul>
                            <br></br>
                        </p>
                    </td>
                    <td>
                        <video src={video} controls height="500px" width="autp"></video>
                        <br></br>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Onboarding;