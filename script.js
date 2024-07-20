

// loader code
document.addEventListener('DOMContentLoaded', () => {
    // Function to animate blinders rolling in
    const animateBlinders = () => {
        gsap.from('.blinder', {
            y: '-100%',
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out'
        });
    };

    // Set a timeout to delay the execution of the loader animation
    setTimeout(() => {
        const timeline = gsap.timeline({
            onComplete: () => {
                // Hide loader and reveal content
                document.querySelector('.loader').style.display = 'none';
                gsap.to('.hidden-content', {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power4.out',
                    onComplete: animateBlinders // Trigger blinder animation after content reveal
                });
            }
        });

        // SVG and blinder animation
        timeline.to('svg', {
            scale: 0,
            duration: 0.5,
            ease: 'power3.inOut'
        }).to('.blinder', {
            scaleY: 0,
            duration: 0.5,
            stagger: 0.3,
            ease: 'power3.out'
        }, '-=0.5');
    }, 3500); 
});







gsap.from("nav img", {
    opacity: 1,

    y: -60,
    duration: 1,
    delay: 5.5,
    stagger: 1,

});



gsap.from("#watercube", {
    opacity: 0,
    // x: "-500px",
    y: "400px",
    duration: 1.5,
    delay: 5,
    // // scale:0,
    // // repeat: -1,
    yoyo: true

})
gsap.from("#centerherobottle", {
    opacity: 0,
    // x: "-500px",
    y: "400px",
    duration: 1.5,
    delay: 5,
    // // scale:0,
    // // repeat: -1,
    yoyo: true

})
gsap.from(".hero #herobottle1", {
    opacity: 0,
    x: "-500px",
    // y: "700px",
    duration: 1.5,
    delay: 5,
    // scale:0,
    // repeat: -1,
    yoyo: true

})

gsap.from(".hero #herobottle2", {
    opacity: 0,
    x: "500px",
    // y: "700px",
    duration: 1.5,
    delay: 5,
    // scale:0,
    // repeat: -1,
    yoyo: true

})
gsap.from(".hero #pure,#refreshing", {
    opacity: 0,

    y: "400px",
    duration: 2,
    delay: 3.5,
    // repeat: -1,
    yoyo: true

})

gsap.from(".hero #bisleri", {
    opacity: 0,

    // y: "700px",
    duration: 1.5,
    delay: 4,
    scale: 0,
    // repeat: -1,
    yoyo: true

})


gsap.from(".leftimg", {
    opacity: 0,
    x: "500px",

    duration: 2,
    delay: 0,
    scrollTrigger: ".benifits",
    yoyo: true

})

gsap.from(".rightimg", {
    opacity: 0,
    x: "-500px",
    scrollTrigger: ".benifits",
    duration: 2,
    delay: 0,
    yoyo: true
})

gsap.from(".centercontent a", {
    opacity: 0,

    y: 100,
    duration: 1.5,
    delay: 1,
    stagger: 1,
    scrollTrigger: "centercontent a",
    yoyo: true
});

gsap.from(".benifitsleftbot", {
    opacity: 0,
    x: "-500px",

    duration: 1,
    delay: 0,
    scrollTrigger: ".benifits a",
    yoyo: true
})


gsap.from(".benifitsrightbot", {
    opacity: 0,
    x: "500px",

    duration: 1,
    delay: 0,
    scrollTrigger: ".benifits a",
    yoyo: true
})


gsap.from(".benifits p", {
    opacity: 0,
    y: 500,
    duration: 2,
    delay: 2,
    stagger: 1,
    scrollTrigger: ".benifits p",
    yoyo: true
});


gsap.from(".product-section h1", {
    opacity: 0,

    y: "-300px",
    duration: 2,
    delay: 0,
    // repeat: -1,
    yoyo: true,
    scrollTrigger: ".input-container",


})
gsap.from(".input-container", {
    opacity: 0,

    x: "400px",
    duration: 1,
    delay: 0,
    // repeat: -1,
    yoyo: true,
    scrollTrigger: ".input-container",


})

gsap.from(".product-grid #product-card1", {
    opacity: 0,
    y:50,
    duration: 1,
    delay: 1,
    // repeat: -1,
    yoyo: true,
    stagger: 0.1,
    scrollTrigger: "#product-card1"


})

gsap.from(".product-grid #product-card2", {
    opacity: 0,

    y:50,
    duration: 1,
    delay: 1,
    // repeat: -1,
    yoyo: true,
    stagger: 0.1,
    scrollTrigger: "#product-card2"


})

gsap.from(".product-grid #product-card3", {
    opacity: 0,

    y:50,
    duration: 1,
    delay: 1,
    // repeat: -1,
    yoyo: true,
    stagger: 0.1,
    scrollTrigger: "#product-card3"


})

gsap.from(".product-grid #product-card4", {
    opacity: 0,

    y:50,
    duration: 1,
    delay: 1,
    // repeat: -1,
    yoyo: true,
    stagger: 0.1,
    scrollTrigger: "#product-card4"


})
gsap.from(".product-grid #product-card5", {
    opacity: 0,

    y:50,
    duration: 1,
    delay: 1,
    // repeat: -1,
    yoyo: true,
    stagger: 0.1,
    scrollTrigger: "#product-card5"


})
gsap.from(".product-grid #product-card6", {
    opacity: 0,

    y:50,
    duration: 1,
    delay: 1,
    // repeat: -1,
    yoyo: true,
    stagger: 0.1,
    scrollTrigger: "#product-card6"


})
gsap.from("#product-card1 h2,p ", {
    opacity: 0,

    // y:200,
    duration: 0.5,
    delay: 1,
    // repeat: -1,
    yoyo: true,
    stagger: 0.2,
    scrollTrigger: "#product-card1",


})

gsap.from(".footerimg img", {
    opacity: 0,

    // x:100,
    duration: 1,
    delay: 1,
    // repeat: -1,
    yoyo: true,
    stagger: 0.1,
    scrollTrigger: ".footerimg",


})

gsap.from(".plans-container .plan-card", {
    opacity: 0,

    
    duration: 3,
    delay: 1,
    // repeat: -1,
    yoyo: true,
    stagger: 0.5,
    stagger:1,
    scrollTrigger: ".plans-container",


})

gsap.from(".FAQ-SEC h1", {
    opacity: 0,

    y: "-100px",
    duration: 0.5,
    delay: 0,
    // repeat: -1,
    yoyo: true,
    scrollTrigger: ".FAQ",


})

gsap.from(".FAQ-SEC .FAQ ", {
    opacity: 0,

    y: 100,
    duration: 6,
    delay: 1,
    stagger: 1,
    scrollTrigger: ".FAQ-SEC ",
    yoyo: true
});

gsap.from(".footer-content h2", {
    opacity: 0,

    y: "-100px",
    duration: 1,
    delay: 0,
    // repeat: -1,
    yoyo: true,
    scrollTrigger: ".footer-content",


})

gsap.from(".social-media-links a ", {
    opacity: 0,

    y: 100,
    duration: 2,
    delay: 1,
    stagger: 1,
    scrollTrigger: ".footer-content ",
    yoyo: true
});








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








document.querySelectorAll('.FAQQ i').forEach((icon) => {
    icon.addEventListener('click', () => {
        const faqa = icon.closest('.FAQQ').nextElementSibling;
        faqa.classList.toggle('open');
    });
})



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


