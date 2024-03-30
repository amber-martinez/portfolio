import React from "react";
import bubbles from "./Bubbles"

function Home() {

    return (
        <div>
            <div class="header">
                <h1 style={{ fontFamily: 'Courier New', fontWeight: 500 }}>Hello there, I'm Amber</h1>
                <p style={{ fontSize: 18 }}>Full-stack software engineer with a background in monetization and gaming.</p>
            </div>
            {bubbles}
        </div>
    )
}

export default Home;