import React from "react";
import img from "./project-imgs/SpotifyMe.png"

function SpotifyMe() {
    return (
        <div id="project">
            <h1 id="projectHeader">Spotify Me</h1>
            <p id="projectSub"><i>JavaScript, React Native, React Base, Spotify's Web API</i></p>
            <p>
                Spotify Me is a mobile application that uses Spotify's Web API to search for artists' albums. In the future, I want to implement account creation to store saved albums and songs, and to create playlists. Current features include:
                <ul>
                    <li>Uses Spotify's Web API to search for artists' albums</li>
                    <li>Lists albums, their tracks, and times converted from milliseconds</li>
                    <li>Option to open up the album directly on Spotify</li>
                </ul>
                I created Spotify Me because I wanted to learn native development with React Native and to practice using web API's. I chose Spotify's Web API because it's one of my favorite apps and I love music!
                <br></br><br></br>
                **Currently do not have an updated GitHub to protect the access token I have stored on this project.
            </p>
            <br></br><br></br>
            <img src={img} alt="Swiftle game, answer is swift" style={{ borderRadius: 50, border: "1px #dcdee8 solid", width: "82.5%"  }}></img>
        </div>
    )
}

export default SpotifyMe;