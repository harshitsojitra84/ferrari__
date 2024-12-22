const videos = document.querySelectorAll('.video-slide');
const videoSlider = document.querySelector('.video-slider');
const title = document.getElementById('videoTitle');
const description = document.getElementById('videoDescription');
const links = document.getElementById('videolinks');
const dots = document.querySelectorAll('.dot');
let currentVideoIndex = 0;

const videoData = [
    { title: "Racing", description: "Scuderia Ferrari", links: "DISCOVER" },
    { title: "Collections", description: "HOLIDAY SEASON", links: "DISCOVER FERRARI GIFTS" },
    { title: "Sports Cars", description: "Start Your Engine", links: "DISCOVER THE FERRARI LINE UP" }
];

function changeVideoAndText(index) {
    if (index === undefined) {
        currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    } else {
        currentVideoIndex = index;
    }

    // Remove active classes for animation reset
    title.classList.remove('active', 'bottom-to-top');
    description.classList.remove('active', 'bottom-to-top');
    links.classList.remove('active', 'bottom-to-top');
    dots.forEach(dot => dot.classList.remove('active'));

    // Move video slider to the next slide
    videoSlider.style.transform = `translateX(-${currentVideoIndex * 100}%)`;

    // Update text content
    title.innerHTML = videoData[currentVideoIndex].title;
    description.innerHTML = videoData[currentVideoIndex].description;
    links.innerHTML = videoData[currentVideoIndex].links;

    // Trigger a reflow to reset animations
    void title.offsetWidth;
    void description.offsetWidth;
    void links.offsetWidth;

    setTimeout(() => {
        // Add the classes for animation and activation
        title.classList.add('active', 'bottom-to-top');
        description.classList.add('active', 'bottom-to-top');
        links.classList.add('active', 'bottom-to-top');
        dots[currentVideoIndex].classList.add('active');
    }, 50);
}

// Initialize the first slide
videoSlider.style.transform = "translateX(0)";
title.classList.add('active', 'bottom-to-top');
description.classList.add('active', 'bottom-to-top');
links.classList.add('active', 'bottom-to-top');

// Change slides every 15 seconds
let intervalId = setInterval(changeVideoAndText, 20000);


document.oncontextmenu = () =>{
    alert("Don't try right click quark you can't inspect")
    return false;
}

document.onkeydown = e =>{
    if(e.key == "F12"){
        alert("Don't try Quark")
        return false;
    }
    if(e.ctrlkey && e.key =="u"){
        alert("Don't try Quark")
        return false;
    }
    if(e.ctrl && e.key =="c"){
        alert("Don't try Quark")
        return false;
    }
    if(e.ctrl && e.key =="v"){
        alert("Don't try Quark")
        return false;
    }
}

