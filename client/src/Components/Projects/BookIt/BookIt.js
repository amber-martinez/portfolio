import React from "react";
import BookItSlides from "./BookItSlides";

function BookIt() {
    return (
        <div id="project" style={{ paddingBottom: 200 }}>
            <h1 id="projectHeader">Book It</h1>
            <p id="projectSub"><i>JavaScript, React, Ruby on Rails, Bootstrap, PostgreSQL, Redux, HTML, CSS</i></p>
            <p>
                Book It is a full-stack bookmark organization application created with HTML, CSS, Javascript, React, Ruby on Rails, Bootstrap, PostgreSQL, and Redux. It has been deployed on Render here, and can be found on Github here.
                <br></br><br></br>
                I created Book It to solve the common problem of losing bookmarked links. Remember that one article you wanted to read, but you saved it for later? Did you save it on your phone, or was it on your laptop this time? On which app did you save it? Book It allows you to have one central place to access all of your bookmarks in categorized and appearance-personalized lists.
            </p>
            <div>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/amber-martinez/book-it">Github</a>
            </div>
            <br></br>
            <h3>Planning</h3>
                <p>
                    To get my project organized, I created a project proposal to outline my goals. This allowed me to get a clear and tangible idea of how I wanted to structure my application to meet those goals. My proposal greatly aided me in creating a neat and functioning composition.
                </p>
            <br></br><br></br>
            <img src='https://i.imgur.com/PAKdVO6.png' alt="project proposal" style={{ width: "82.6%", borderRadius: 50, border: "1px #dcdee8 solid" }}></img>
            <br></br><br></br><br></br><br></br>
            <h3>End Result</h3>
            <table>
                <tr>
                    <td style={{ paddingRight: 100 }}><li>User creation, authorization, and authentication</li></td>
                    <td><li>Create themes</li></td>
                </tr>
                <tr>
                    <td style={{ paddingRight: 100 }}><li>Create/edit lists</li></td>
                    <td><li>Add/remove bookmarked links</li></td>
                </tr>
                <tr>
                    <td style={{ paddingRight: 100 }}><li>Customize lists’ appearances</li></td>
                    <td><li>Light/dark mode</li></td>
                </tr>
            </table>
            <br></br><br></br><br></br>
            <BookItSlides/>
        </div>
    )
}

export default BookIt;