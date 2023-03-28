import React from "react";

function Swiftle() {

    return (
        <div>
            <h1>Swiftle</h1>
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
        </div>
    )
}

export default Swiftle;