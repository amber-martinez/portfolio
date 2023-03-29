import React from "react";

function AboutMe() {

    return (
        <div id="project">
            <img src="https://i.imgur.com/mIqd7it.jpg" style={{ height: 230, objectFit: 'cover', borderRadius: "50%", border: "1px #dcdee8 solid", right: "50%", position: "absolute", opacity: "98%" }}></img>
            <div id="sb">
                <p>
                    Hi, I’m Amber! I’m an aspiring software engineer currently working as an R&D lead at Pocket Gems for the game Episode Interactive.
                </p>
            </div>
            <div id="sb">
                <p>
                    <h3>Education</h3>
                    <h4>Courses</h4>
                    <ul>
                        <li>(IP) HarvardX – CS50x Introduction to Computer Science</li>
                        <li>Zero to Mastery – Data Structures & Algorithms</li>
                        <li>Flatiron School – Software Engineering certificate</li>
                    </ul>
                    <h4>Degrees</h4>
                    <ul>
                        <li>Florida International University – B.A. in Liberal Studies</li>
                    </ul>
                </p>
            </div>
            <div id="sb">
                <h3>Hobbies</h3>
                <ul>
                    <li>Baking</li>
                    <li>Writing poetry</li>
                    <li>Playing switch</li>
                    <li>Collecting vinyl records</li>
                    <li>Arranging flowers</li>
                    <li>Knitting (beginner!)</li>
                </ul>
                <p>
                    Check out my&#160;
                    <a target="_blank" href="https://www.instagram.com/ambthebaker/" style={{ color: "#2c2e32", textDecoration: 'underline' }}>baking</a>
                    &#160;and&#160;
                    <a target="_blank" href="https://www.instagram.com/amberpoet/" style={{ color: "#2c2e32", textDecoration: 'underline' }}>poetry</a>
                    &#160;Instagram accounts!
                </p>
            </div>
        </div>
    )
}

export default AboutMe;