let parallax = document.querySelector(".header__box");
let header = document.querySelector(".header");
let layers = document.querySelectorAll(".header__box .parallax");
let centerY = parallax.offsetWidth / 2;
let centerX = parallax.offsetHeight / 2 + 500;

console.log(parallax);
header.onmousemove = function (event) {
    for (let i = 0; i < layers.length; i++) {
        layers[i].setAttribute(
            "style",
            "transform: translate3d(" +
            Math.round((centerX - event.pageX) / (10 + i * 3) + 100) +
            "px, " +
            Math.round((centerY - event.pageY) / (10 + i * 3)) +
            "px, 0);"
        );
    }
};

let parallax2 = document.querySelector(".statistic");
let header2 = document.querySelector(".header__box2");
let layers2 = document.querySelectorAll(".statistic .parallax2");
let cenY = parallax2.offsetWidth / 2;
let cenX = parallax2.offsetHeight / 2;

console.log(parallax2);
header2.onmousemove = function (event) {
    for (let i = 0; i < layers2.length; i++) {
        layers2[i].setAttribute(
            "style",
            "transform: translate3d(" +
            Math.round((cenX - event.pageX) / (10 + i * 4)) +
            "px, " +
            Math.round((cenY - event.pageY) / (10 + i)) +
            "px, 0);"
        );
    }
};

let parallax3 = document.querySelector(".skills__box");
let header3 = document.querySelector(".header__box3");
let layers3 = document.querySelectorAll(".skills__box .parallax3");
let CenY = parallax3.offsetWidth / 2;
let CenX = parallax3.offsetHeight / 2;

console.log(parallax3);
header3.onmousemove = function (event) {
    for (let i = 0; i < layers3.length; i++) {
        layers3[i].setAttribute(
            "style",
            "transform: translate3d(" +
            Math.round((CenX - event.pageX) / (10 + i * 4)) +
            "px, " +
            Math.round((CenY - event.pageY) / (10 + i * 0.1) + 400) +
            "px, 0);"
        );
    }
};

let jobs = document.querySelector(".jobs");
let wrapper = document.querySelector("#wrapper");

let gridSize = 10; //15x15

for (let i = 0; i < gridSize; i++) {
    let row = document.createElement("div");
    row.classList = "row";
    for (let j = 0; j < gridSize; j++) {
        row.innerHTML += `<div class="icon" style="background: linear-gradient(180deg, hsl(${Math.round(
            Math.random() * 100
        )}, 65%, 80%) 0%, hsl(${Math.round(
            Math.random() * 100
        )}, 55%, 80%) 100%"> <div class="icon__img"></div> </div>`;
    }
    wrapper.appendChild(row);
}

function randomInt(min, max) {
    var random = min - 0.5 + Math.random() * (max - min + 1);
    random = Math.round(random);
    return random;
}

for (let i = 0; i < document.querySelectorAll(".icon__img").length; i++) {
    var randomNum = randomInt(1, 10);
    document.querySelectorAll(".icon__img")[i].classList += " name" + randomNum;
    console.dir(randomNum);
}

function updateCoords() {
    let centerX = jobs.getBoundingClientRect().x + jobs.offsetWidth / 2;
    let centerY = jobs.getBoundingClientRect().y + jobs.offsetHeight / 2;

    let icons = document.querySelectorAll(".icon");
    for (let icon of icons) {
        let iconX = icon.getBoundingClientRect().x;
        let iconY = icon.getBoundingClientRect().y;
        let distance = Math.sqrt(
            (iconX - centerX) ** 2 + (iconY - centerY) ** 2
        );
        let percent = Math.min((1 - distance / centerX) * 1.4, 1);
        icon.style.transform = "scale(" + percent + ")";
    }
}

setInterval(() => {
    updateCoords();
}, 200);

$("#wrapper").draggable({
    start: function () {
        $("#wrapper").css({
            transition: "0s",
        });
        $(".icon").removeClass("icon__big").css({
            transition: "0.5s ease",
        });
    },
    stop: function () {
        $("#wrapper").css({
            transition: "1s ease",
        });
    },
});

$(".icon").on("click", function () {
    $(".icon").removeClass("icon__big");

    let $wrapper = $("#wrapper");
    let $icon = $(".icon");
    $(this).toggleClass("icon__big");
    let iconObj = $(this)[0].getBoundingClientRect();
    let wrapperObj = $wrapper[0].getBoundingClientRect();
    let centerX = jobs.offsetWidth / 2;
    let centerY = jobs.offsetHeight / 2;
    let iconX = wrapperObj.x - (iconObj.x + iconObj.width / 2) + centerX;
    let iconY = wrapperObj.y - (iconObj.y + iconObj.height / 2) + centerY;

    $wrapper.css({
        left: iconX + "px",
        top: iconY + "px",
    });
});

window.addEventListener("scroll", function () {
    setTimeout(() => {
        let diagram = document.querySelector(".diagram");
        let diagramY = diagram.getBoundingClientRect().y;
        let pageY = window.pageYOffset;

        console.log(pageY, diagramY);
        if (pageY >= diagramY) {
            diagram.classList.add("show");
        } else if (pageY <= diagramY) {
            diagram.classList.remove("show");
        } else {
            diagram.classList.remove("show");
        }
    }, 500);
});

ScrollReveal({
    reset: true,
}).reveal(".reveal", {
    delay: 300,
    duration: 1500,
    distance: "50px",
    origin: "bottom",
});

ScrollReveal({
    reset: true,
}).reveal(".reveal2", {
    delay: 300,
    duration: 1500,
    origin: "top",
    distance: "50px",
});

var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

let answers = {
    "block-1": 4,
    "block-2": 2,
    "block-3": 4,
    "block-4": 3,
    "block-5": 4,
    "block-6": 3,
    "block-7": 4,
    "block-8": 3,
    "block-9": 2,
    "block-1-1-2": 2,
}

function check_answers() {
    let count = 0;
    let answered = document.querySelectorAll('input:checked');

    for (let i = 0; i < answered.length; i++) {
        let question = answered[i].name;
        let answer = answered[i].dataset.answer;

        if (answers[question] == answer) {
            count++;
        }
    }
    document.querySelector('.answers2').innerText = count + "/" + Object.keys(answers).length;
};


let submit = document.querySelector(".submit2");
submit.addEventListener("click", function (event) {
    event.preventDefault();
    check_answers();
});

$("#block-1-1-2").change(function () {
    $(".submit2").css({
        'visibility': "visible"
    });
});

$("#block-1-1-1").change(function () {
    $(".submit2").css({
        'visibility': "visible"
    });
});

$(".submit2").click(function () {
    $(".answers2").css({
        'visibility': "visible"
    });
})

$(".menu__item").click(function () {
    $(".hamburger__menu__box").css({
        'display': 'none',
        'transition': '2s',
    });
    $("span::after").css({
        'transform': 'rotate(0deg)',
    })
});

$(".menu__btn").click(function () {
    $(".hamburger__menu__box").css({
        'display': 'block',
        'transition': '2s',
    });
})