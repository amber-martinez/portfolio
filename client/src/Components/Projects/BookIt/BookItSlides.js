import React from "react";

function BookItSlides() {

    return (
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" style={{ backgroundColor: '#8a8c92' }}></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2" style={{ backgroundColor: '#8a8c92' }}></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3" style={{ backgroundColor: '#8a8c92' }}></button>
            </div>
            <div class="carousel-inner" style={{ borderRadius: 50, border: "1px #dcdee8 solid" }}>
                <div class="carousel-item active" data-bs-interval="4000">
                <img src="https://i.imgur.com/Xfwe5m4.png" class="d-block w-100" alt="homepage of book it" style={{ borderRadius: 50 }}></img>
                </div>
                <div class="carousel-item" data-bs-interval="4000">
                <img src="https://i.imgur.com/rzocRix.png" class="d-block w-100" alt="creating a new list" style={{ borderRadius: 50 }}></img>
                </div>
                <div class="carousel-item" data-bs-interval="4000">
                <img src="https://i.imgur.com/M6Aipxq.png" class="d-block w-100" alt="list of all user's lists" style={{ borderRadius: 50 }}></img>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default BookItSlides;