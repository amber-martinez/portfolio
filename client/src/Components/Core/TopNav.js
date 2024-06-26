import React from "react";

function TopNav() {

    return (
        <nav class="navbar navbar-expand-lg bg-light" id="topNav">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Amber Martinez</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="/about-me">About</a>
                    </li>
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Work
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="/spotify-me">Spotify Me</a></li>
                        <li><a class="dropdown-item" href="/swiftle-wordle">Swiftle</a></li>
                        <li><a class="dropdown-item" href="/book-it">Book It</a></li>
                        <li><a class="dropdown-item" href="/my-booknook">My Booknook</a></li>
                        <li><a class="dropdown-item" href="/harvardX">HarvardX CS50x</a></li>
                        <li><a class="dropdown-item" href="/episode">Episode Interactive (game)</a></li>
                    </ul>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}

export default TopNav;