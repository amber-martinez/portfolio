import React from "react";

function BookItSlides() {

    return (
        <div class="container">
            <div id="carousel-demo" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="item">
                    <img src="https://i.imgur.com/Xfwe5m4.png" id="slideImg"></img>
                </div>
                <div class="item">
                    <img src="https://i.imgur.com/rzocRix.png" id="slideImg"></img>
                </div>
                <div class="item active">
                    <img src="https://i.imgur.com/M6Aipxq.png" id="slideImg"></img>
                </div>
            </div>
            {/* <!--slider control for card--> */}
            <a class="left carousel-control" href="#carousel-demo" data-slide="prev" style={{ backgroundImage: 'none' }}>
                <span class="glyphicon glyphicon-chevron-left">
            </span>
            </a>
            <a class="right carousel-control" href="#carousel-demo" data-slide="next" style={{ backgroundImage: 'none' }}>
                <span class="glyphicon glyphicon-chevron-right">
            </span>
            </a>
        </div>
    </div>
    )
}

export default BookItSlides;