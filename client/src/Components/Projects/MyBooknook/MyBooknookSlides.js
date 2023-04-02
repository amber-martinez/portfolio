import React from "react";

function MyBooknookSlides() {
    return (
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1" style={{ backgroundColor: '#8a8c92' }}></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2" style={{ backgroundColor: '#8a8c92' }}></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3" style={{ backgroundColor: '#8a8c92' }}></button>
            </div>
            <div class="carousel-inner" style={{ borderRadius: 50, border: "1px #dcdee8 solid" }}>
                <div class="carousel-item active" data-bs-interval="4000">
                <img src="https://i.imgur.com/GipTZJE.png" class="d-block w-100" alt="..." style={{ borderRadius: 50 }}></img>
                {/* <div class="carousel-caption d-none d-md-block">
                    <h5>First slide label</h5>
                    <p>Some representative placeholder content for the first slide.</p>
                </div> */}
                </div>
                <div class="carousel-item" data-bs-interval="4000">
                <img src="https://i.imgur.com/FdNRPpt.png" class="d-block w-100" alt="..." style={{ borderRadius: 50 }}></img>
                {/* <div class="carousel-caption d-none d-md-block">
                    <h5>Second slide label</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                </div> */}
                </div>
                <div class="carousel-item" data-bs-interval="4000">
                <img src="https://i.imgur.com/3HvCB2t.png" class="d-block w-100" alt="..." style={{ borderRadius: 50 }}></img>
                {/* <div class="carousel-caption d-none d-md-block">
                    <h5>Third slide label</h5>
                    <p>Some representative placeholder content for the third slide.</p>
                </div> */}
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

export default MyBooknookSlides;