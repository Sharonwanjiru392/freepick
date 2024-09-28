// -----------------------------------games----------------


document.addEventListener("DOMContentLoaded", function() {
    let slideContent = document.querySelectorAll("[explode]");

// access buttons
let nex = document.querySelector("[nexting]");
let pre = document.querySelector("[preving]");

var counterGames = 0;

// code for after button
nex.addEventListener("click", slideAfter);
function slideAfter() {
    slideContent[counterGames].style.animation = "nex1 0.5s ease-in forwards";
    if (counterGames >= slideContent.length - 1) {
        counterGames = 0;
    } else {
        counterGames++;
    }
    slideContent[counterGames].style.animation = "nex2 0.5s ease-in forwards";
}

// code for before button
pre.addEventListener("click", slideBefore);
function slideBefore() {
    slideContent[counterGames].style.animation = "pre1 0.5s ease-in forwards";
    if (counterGames == 0) {
        counterGames = slideContent.length - 1;
    } else {
        counterGames--;
    }
    slideContent[counterGames].style.animation = "pre2 0.5s ease-in forwards";
}


function autoSliding() {
    deletInterval = setInterval(timer,3000);
    function timer() {
        slideAfter();
        indicators(); 
    }
}
autoSliding() 


// ---------------stop auto sliding when mouse is over-------------
const container = document.querySelector(".explore-cont")
container.addEventListener("mouseover", function() {
    clearInterval(deletInterval);
});
// ---------------resume sliding when mouse is out-------------
container.addEventListener("mouseout", autoSliding);


})



// -----------------------------------games----------------


document.addEventListener("DOMContentLoaded", function() {
    let slideSwipe = document.querySelectorAll("[bot]");

// access buttons
let next = document.querySelector("[ahead]");
let prev = document.querySelector("[previously]");

var counter= 0;

// code for after button
next.addEventListener("click", slideNext);
function  slideNext() {
    slideSwipe[counter].style.animation = "next1 0.5s ease-in forwards";
    if (counter >= slideSwipe.length - 1) {
        counter = 0;
    } else {
        counter++;
    }
    slideSwipe[counter].style.animation = "next2 0.5s ease-in forwards";
}

// code for before button
prev.addEventListener("click", slidePrev);
function slidePrev() {
    slideSwipe[counterGames].style.animation = "prev1 0.5s ease-in forwards";
    if (counter == 0) {
        counter = slideSwipe.length - 1;
    } else {
        counter--;
    }
    slideSwipe[counter].style.animation = "prev2 0.5s ease-in forwards";
}


function autoNexting() {
    deleteInterval = setInterval(timer,3000);
    function timer() {
        slideNext();
    }
}
autoNexting() 


// ---------------stop auto sliding when mouse is over-------------
const container = document.querySelector(".bottle-cont")
container.addEventListener("mouseover", function() {
    clearInterval(deleteInterval);
});
// ---------------resume sliding when mouse is out-------------
container.addEventListener("mouseout", autoNexting);


})

// -----------------------------------games two----------------


document.addEventListener("DOMContentLoaded", function() {
    let assSwipe = document.querySelectorAll("[bop]");

// access buttons
let next = document.querySelector("[mbele]");
let prev = document.querySelector("[nyuma]");

var counters= 0;

// code for after button
next.addEventListener("click", wayNext);
function  wayNext() {
    assSwipe[counters].style.animation = "juu1 0.5s ease-in forwards";
    if (counters >= assSwipe.length - 1) {
        counters = 0;
    } else {
        counters++;
    }
    assSwipe[counters].style.animation = "juu2 0.5s ease-in forwards";
}

// code for before button
prev.addEventListener("click", wayPrev);
function wayPrev() {
    assSwipe[counters].style.animation = "chini1 0.5s ease-in forwards";
    if (counters == 0) {
        counters = assSwipe.length - 1;
    } else {
        counters--;
    }
    assSwipe[counters].style.animation = "chini2 0.5s ease-in forwards";
}


function autoNexts() {
    deletelInterval = setInterval(timer,3000);
    function timer() {
        wayNext();
    }
}
autoNexts() 


// ---------------stop auto sliding when mouse is over-------------
const container = document.querySelector(".window-cont")
container.addEventListener("mouseover", function() {
    clearInterval(deletelInterval);
});
// ---------------resume sliding when mouse is out-------------
container.addEventListener("mouseout", autoNexts);


})


// -----------------------------------laptop two----------------


document.addEventListener("DOMContentLoaded", function() {
    let nailSmall = document.querySelectorAll("[torn]");

// access buttons
let next = document.querySelector("[hair]");
let prev = document.querySelector("[hare]");

var counterss= 0;

// code for after button
next.addEventListener("click", wayssNext);
function  wayssNext() {
    nailSmall[counterss].style.animation = "paper1 0.5s ease-in forwards";
    if (counterss >= nailSmall.length - 1) {
        counterss = 0;
    } else {
        counterss++;
    }
    nailSmall[counterss].style.animation = "paper2 0.5s ease-in forwards";
}

// code for before button
prev.addEventListener("click", waysPrev);
function waysPrev() {
    nailSmall[counterss].style.animation = "pen1 0.5s ease-in forwards";
    if (counterss == 0) {
        counterss = nailSmall.length - 1;
    } else {
        counterss--;
    }
    nailSmall[counterss].style.animation = "pen2 0.5s ease-in forwards";
}


function autoNextss() {
    deleterInterval = setInterval(timer,3000);
    function timer() {
        waysPrev();
    }
}
autoNextss() 


// ---------------stop auto sliding when mouse is over-------------
const container = document.querySelector(".typec-cont")
container.addEventListener("mouseover", function() {
    clearInterval(deleterInterval);
});
// ---------------resume sliding when mouse is out-------------
container.addEventListener("mouseout", autoNextss);


})



