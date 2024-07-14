window.addEventListener('scroll', function () {
    const scrollValue = window.scrollY;
    const fastScrollElement = document.querySelector('#herobottle1');
    fastScrollElement.style.transform = `rotate(45deg) translateY(${-scrollValue * 0.7}px)`; // Adjust speed with multiplier
});

window.addEventListener('scroll', function () {
    const scrollValue = window.scrollY;
    const fastScrollElement = document.querySelector('#herobottle2');
    fastScrollElement.style.transform = `rotate(-45deg) translateY(${-scrollValue * 0.7}px)`; // Adjust speed with multiplier
});

window.addEventListener('scroll', function () {
    const scrollValue = window.scrollY;
    const fastScrollElement = document.querySelector('#leftimg1');
    fastScrollElement.style.transform = ` translateY(${-scrollValue * 1}px)`; // Adjust speed with multiplier
});

window.addEventListener('scroll', function () {
    const scrollValue = window.scrollY;
    const fastScrollElement = document.querySelector('#leftimg2');
    fastScrollElement.style.transform = ` translateY(${-scrollValue * 1}px)`; // Adjust speed with multiplier
});

window.addEventListener('scroll', function () {
    const scrollValue = window.scrollY;
    const fastScrollElement = document.querySelector('#benifitsleftbotimg');
    fastScrollElement.style.transform = ` translateY(${-scrollValue * 0.5}px)`; // Adjust speed with multiplier
});

window.addEventListener('scroll', function () {
    const scrollValue = window.scrollY;
    const fastScrollElement = document.querySelector('#benifitsrightbotimg');
    fastScrollElement.style.transform = ` translateY(${-scrollValue * 0.5}px)`; // Adjust speed with multiplier
});





var Qicon = document.querySelectorAll(".FAQQ i");
var ans = document.querySelectorAll(".FAQA h4");

Qicon.forEach((i, index) => {
    i.addEventListener("click", function () {
        if (ans[index].style.display === "none") {
            ans[index].style.display = "inline";

        } else {
            ans[index].style.display = "none";
        }
    });
});



window.addEventListener('scroll', function () {
    const heroBottle = document.getElementById('herobottle');
    const benifitsSection = document.querySelector('.benifits');
    const benifitsRect = benifitsSection.getBoundingClientRect();
    const heroBottleRect = heroBottle.getBoundingClientRect();

    // Check if the bottom of the hero bottle image is within the benifits section
    if (heroBottleRect.bottom > benifitsRect.top && heroBottleRect.top < benifitsRect.bottom) {
        heroBottle.style.position = 'absolute';
        heroBottle.style.top = `${benifitsSection.offsetTop}px`;
    } else {
        heroBottle.style.position = 'fixed';
        heroBottle.style.top = '20px'; // Adjust to original fixed position
    }
});



