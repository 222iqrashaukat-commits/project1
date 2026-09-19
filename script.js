/* =================================
   SMART GARDEN JAVASCRIPT
================================= */


/* =================================
   DARK / LIGHT MODE
================================= */

const themeButton = document.getElementById("themeButton");


if (themeButton) {

    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");


        if (document.body.classList.contains("dark-mode")) {

            themeButton.textContent = "☀️";

        } else {

            themeButton.textContent = "🌙";

        }

    });

}


/* =================================
   PLANT CARE BUTTONS
================================= */

const infoButtons = document.querySelectorAll(".info-button");


infoButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        alert(
            "Remember to check the plant's water, sunlight and soil requirements regularly."
        );

    });

});


/* =================================
   DAILY TIP
================================= */

const newTipButton = document.getElementById("newTipButton");

const dailyTip = document.getElementById("dailyTip");


const tips = [

    "Check the soil before watering your plant.",

    "Remove dry leaves from your plants.",

    "Give your plants suitable sunlight.",

    "Do not give every plant the same amount of water.",

    "Check your plants regularly for visible problems."

];


if (newTipButton && dailyTip) {

    newTipButton.addEventListener("click", function () {

        const randomNumber =
            Math.floor(Math.random() * tips.length);

        dailyTip.textContent = tips[randomNumber];

    });

}


/* =================================
   SCHEDULE BUTTONS
================================= */

const doneButtons = document.querySelectorAll(".done-button");


doneButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const card = button.parentElement;


        card.classList.toggle("done");


        if (card.classList.contains("done")) {

            button.textContent = "Completed";

        } else {

            button.textContent = "Mark Done";

        }

    });

});


/* =================================
   CONTACT FORM
================================= */

const contactForm = document.getElementById("contactForm");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const name =
            document.getElementById("name").value;


        alert(
            "Thank you, " + name +
            "! Your message has been received."
        );


        contactForm.reset();

    });

}


/* =================================
   CONSOLE MESSAGE
================================= */

console.log("Smart Garden website is working!");