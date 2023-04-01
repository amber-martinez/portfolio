import React from "react";

function MyBooknookSlides() {
    return (
        <div class="container">
            <div id="carousel-demo" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="item">
                    <img src="https://i.imgur.com/GipTZJE.png" id="slideImg"></img>
                </div>
                <div class="item">
                    <img src="https://i.imgur.com/FdNRPpt.png" id="slideImg"></img>
                </div>
                <div class="item active">
                    <img src="https://i.imgur.com/3HvCB2t.png" id="slideImg"></img>
                </div>
            </div>
            {/* <!--slider control for card--> */}
            <a class="left carousel-control" href="#carousel-demo" data-slide="prev" id="leftArrow">
                <span class="glyphicon glyphicon-chevron-left">
            </span>
            </a>
            <a class="right carousel-control" href="#carousel-demo" data-slide="next" id="rightArrow">
                <span class="glyphicon glyphicon-chevron-right">
            </span>
            </a>
            </div>
        </div>
    )
}

export default MyBooknookSlides;