import React from "react";
import MyBooknookSlides from "./MyBooknookSlides";

function MyBooknook() {

    return (
        <div id="project" style={{ paddingBottom: 200 }}>
            <h1 style={{ lineHeight: 0 }}>My Booknook</h1>
            <p style={{ lineHeight: 3.8, fontWeight: 1000 }}><i>JavaScript, React, Ruby on Rails, Bootstrap, PostgreSQL, Redux, HTML, CSS</i></p>
            <p>
                My Booknook is a full-stack bookmark organization application created with HTML, CSS, Javascript, React, Ruby on Rails, Bootstrap, Ant Design, PostgreSQL, and Cloudinary. It has been deployed on Render here and can be found on Github here.
                <br></br><br></br>
                I created My Booknook for book lovers to find their next read through user reviews and displays of books by data. You’ll find books by genre, by highest average review rating, and by recommendations based on if the user has reviewed the book yet.  You can’t judge a book by its cover, but you can by its reviews and data.
            </p>
            <div>
                <a target="_blank" href="https://github.com/amber-martinez/my-booknook">Github</a>
            </div>
            <br></br>
            <h3>Planning</h3>
                <p>
                    To get my project organized, I designed my relational databases before getting started with my code. This gave me a clear picture of my objects/tables and how they relate to one another. I also made a checklist with notes for myself of all the goals I wanted to achieve in this project.
                </p>
            <br></br><br></br>
            <table>
                <tr>
                    <td style={{ paddingRight: 100 }}>
                        <img src='https://i.imgur.com/gUSpNdk.jpg' style={{ height: 580, borderRadius: 50, border: "1px #dcdee8 solid" }}></img>
                    </td>
                    {/* <td style={{ paddingRight: 100 }}> */}
                        <img src='https://i.imgur.com/BKjCZkL.jpg' style={{ height: 185, borderRadius: 50, border: "1px #dcdee8 solid" }}></img>
                    {/* </td> */}
                </tr>
            </table>
            <br></br><br></br><br></br><br></br>
            <h3>End Result</h3>
            <table>
                <tr>
                    <td style={{ paddingRight: 100 }}><li>User creation, authorization, and authentication</li></td>
                    <td><li>Book recommendation based on books you have not reviewed</li></td>
                </tr>
                <tr>
                    <td style={{ paddingRight: 100 }}><li>Edit user profile</li></td>
                    <td><li>Add books to the books collection</li></td>
                </tr>
                <tr>
                    <td style={{ paddingRight: 100 }}><li>Create/view reviews</li></td>
                    <td><li>View user’s books and reviews</li></td>
                </tr>
                <tr>
                    <td style={{ paddingRight: 100 }}><li>View books with the highest average ratings</li></td>
                    <td><li>Validations for all models</li></td>
                </tr>
            </table>
            <br></br><br></br><br></br>
            <MyBooknookSlides/>
        </div>
    )
}

export default MyBooknook;