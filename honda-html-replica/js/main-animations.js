// GSAP Plugin Registration
gsap.registerPlugin(SplitText, ScrollTrigger, CustomEase, ScrambleTextPlugin);

// Master Animation Orchestrator
$(document).ready(function() {
    console.log('Animation Engine Initialized');

    // Lenis Smooth Scrolling Boilerplate
    const lenis = new Lenis();

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Master timeline
    let masterTl = gsap.timeline();

    // Call animation functions
    // Add the loader animation to the master timeline
    masterTl.add(loader());

    // Add other animations that should run after the loader
    masterTl.add(home(), "-=0.5"); // Example: overlap start of home animation

    // Call functions that are controlled by ScrollTrigger independently
    nav();
    gauge();
    brief();
    artistry();
    specs();
    gallery();
    explore();
    footer();
});

// Loader Animation Function
function loader() {
    let counter = {
        value: 0
    };
    let ease = "M0,0 C0.7,0.024 0.199,0.976 1,1 ";

    function loaderNum() {
        let progress = Math.round(counter.value);
        $(".loader-gauge-text").text(progress);
    };

    const item = document.querySelectorAll(".loader-item")

    function display() {
        gsap.set(".loader", { display: "none" })
    }

    function endLoader() {
        let tl = gsap.timeline();

        tl.to(".loader-gauge", {
                y: "-70vh",
                duration: 1.2,
                ease: ease
            })
            .to(item, {
                yPercent: -100,
                stagger: { amount: .2, from: "random" },
                duration: 1.2,
                ease: ease,
                onComplete: () => {
                    display();
                }
            }, 0)
            .to("[load-overlay]", {
                opacity: 0,
                duration: 1
            }, 0)
            .call(home, null, "-=1.2")
    }

    let tl = gsap.timeline({
        onComplete: () => {
            // Reverse gauge bars rapidly
            gsap.to(".loader-gauge-anim", {
                fill: "#555", // or original color
                stagger: { each: 0.01, from: "end" }, // reverses from right to left
                ease: "power4.inOut",
                duration: 0.06, // much faster
            });
            // Optional: reverse the counter
            gsap.to(counter, {
                onUpdate: loaderNum,
                value: 0,
                duration: 0.5, // much faster
                ease: "power4.inOut",
                onComplete: () => {
                    endLoader();
                }
            });
        }
    });

    // Initial setup
    gsap.set(".loader-gauge", { opacity: 1 });
    gsap.set("[load-overlay]", { opacity: .5 });

    // Animate gauge bars from left to right
    tl.to(".loader-gauge-anim", {
        fill: "#fff", // or your desired color
        stagger: { each: 0.01, from: "start" }, // animates from left to right
        ease: "power4.inOut",
        duration: 0.06,
    })
    .to(counter, {
        onUpdate: loaderNum,
        value: 100,
        duration: 2, // total duration for counter
        ease: "power4.inOut",
    }, 0); // start at the same time as the gauge animation

    return tl;
}

// Home Animation Function
function home() {
    let tl = gsap.timeline();
    
    // Add home animations here
    tl.from(".home_hero_title-split", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
    })
    .from(".home_hero_img-wrap", {
        scale: 1.1,
        opacity: 0,
        duration: 1.5,
        ease: "power3.out"
    }, "-=0.8");

    return tl;
}

// Navigation Animation Function
function nav() {
    // Add navigation animations here
    gsap.from(".nav", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
}

// Gauge Animation Function
function gauge() {
    // Add gauge animations here
    gsap.from(".gauge", {
        scale: 0,
        duration: 1,
        ease: "back.out(1.7)"
    });
}

// Brief Animation Function
function brief() {
    // Add brief section animations here
    gsap.from(".brief", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".brief",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });
}

// Artistry Animation Function
function artistry() {
    // Add artistry section animations here
    gsap.from(".artistry", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".artistry",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });
}

// Specs Animation Function
function specs() {
    // Add specs section animations here
    gsap.from(".specs", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".specs",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });
}

// Gallery Animation Function
function gallery() {
    // Add gallery section animations here
    gsap.from(".gallery", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".gallery",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });
}

// Explore Animation Function
function explore() {
    // Add explore section animations here
    gsap.from(".explore", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".explore",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });
}

// Footer Animation Function
function footer() {
    // Add footer animations here
    gsap.from(".footer", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
            trigger: ".footer",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
        }
    });
}
