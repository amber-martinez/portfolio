import React from "react";

function Swiftle() {
    return (
        <div id="project">
            <h1 id="projectHeader">Swiftle</h1>
            <p id="projectSub"><i>JavaScript, TypeScript, React, HTML, CSS</i></p>
            <p>
                Swiftle is a word game inspired by The New York Times’ game Wordle. The game is currently created with HTML, CSS, Javascript, and React. Check out the Github here. Current features include:
                <ul>
                    <li>6 chances to guess the word using the displayed keyboard</li>
                    <li>Letters are highlighted on the keyboard and matrix by correct place and correct letter, but not the correct place</li>
                    <li>Confetti bursts when the correct word is guessed</li>
                    <li>Refresh to start a new round with a new word</li>
                </ul>
                I am creating Swiftle because first of all, I am a Taylor Swift fan. Secondly, I play Wordle every day. I find the game interesting and fun, so I’m recreating it with a twist: guess words associated with Taylor Swift!
            </p>
            <div>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/amber-martinez/swiftle">Github</a>
            </div>
            <br></br><br></br>
            <img src='https://i.imgur.com/OijmwdC.png' alt="Swiftle game, answer is swift" style={{ borderRadius: 50, border: "1px #dcdee8 solid", width: "82.5%"  }}></img>
        </div>
    )
}

export default Swiftle;