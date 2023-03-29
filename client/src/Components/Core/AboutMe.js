import React from "react";

function AboutMe() {
    return (
        <div id="project">
            <img src="https://i.imgur.com/mIqd7it.jpg" style={{ height: 230, objectFit: 'cover', borderRadius: "50%", border: "1px #dcdee8 solid" }}></img>

            <h4>Hobbies</h4>
            <ul>
                <li>Baking</li>
                <li>Writing poetry</li>
                <li>Playing switch</li>
                <li>Collecting vinyl records</li>
                <li>Arranging flowers</li>
                <li>Knitting (beginner)</li>
            </ul>
            <p>
                Check out my&#160;
                <a target="_blank" href="https://www.instagram.com/ambthebaker/" style={{ color: "#2c2e32", textDecoration: 'underline' }}>baking</a>
                &#160;and&#160;
                <a target="_blank" href="https://www.instagram.com/amberpoet/" style={{ color: "#2c2e32", textDecoration: 'underline' }}>poetry</a>
                &#160;Instagram accounts!
            </p>
        </div>
    )
}

export default AboutMe;