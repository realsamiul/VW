// GSAP Plugin Registration
gsap.registerPlugin(SplitText, ScrollTrigger, CustomEase, ScrambleTextPlugin);

let textEase = "M0,0 C0.312,0.153 0.387,0.326 0.495,0.509 0.593,0.676 0.684,1.017 1,1 "
let ease = "M0,0 C0.7,0.024 0.199,0.976 1,1 ";

// loader
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
        fill: "#292929", // or original color
        stagger: { each: 0.01, from: "end" }, // reverses from right to left
        ease: "power4.inOut",
        duration: 0.06, // much faster
      });

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

  tl.to(counter, {
      delay: .15,
      onUpdate: loaderNum,
      ease: "power4.inOut",
      value: 100,
      duration: 2,
    }, 0)
    .to(".loader-gauge-anim", {
      delay: .3,
      fill: "#FF7700",
      stagger: .03,
      ease: "power4.inOut",
      from: "left",
      duration: .1,
    }, 0)

}

function gauge() {
  const wrap = document.querySelector(".progress-gauge")
  const gauge = document.querySelectorAll(".gauge-dial")
  const anim = document.querySelector(".gauge-anims-wrap")
  let ease = "M0,0 C0.736,0 0.241,1 1,1 ";
  let tl = gsap.timeline();
  let mph = {
    value: 0
  };

  function updateMph() {
    let progress = Math.round(mph.value);
    $(".mph-text").text(progress);
  }

  ScrollTrigger.create({
    trigger: wrap,
    start: "top 80%",
    onEnter: () => {
      tl.to(mph, {
        onUpdate: updateMph,
        ease: "power4.inOut",
        value: 60,
        duration: 2,
      })
        .to(gauge, {
          rotation: 180,
          ease: "power4.inOut",
          duration: 2,
        }, 0)
        .to(anim, {
          scale: 1,
          ease: "power4.inOut",
          duration: 2,
        }, 0)
    }
  })
}

function nav() {
  const nav = document.querySelector(".nav")
  const navItems = document.querySelectorAll(".nav-item")

  ScrollTrigger.create({
    trigger: "body",
    start: "top -100px",
    end: "bottom bottom",
    onEnter: () => {
      gsap.to(nav, {
        y: 0,
        duration: 0.6,
        ease: "power3.out"
      })
    },
    onLeaveBack: () => {
      gsap.to(nav, {
        y: -100,
        duration: 0.6,
        ease: "power3.out"
      })
    }
  })

  navItems.forEach((item, index) => {
    gsap.from(item, {
      y: 20,
      opacity: 0,
      duration: 0.6,
      delay: index * 0.1,
      ease: "power3.out"
    })
  })
}

function home() {
  const hero = document.querySelector(".home-hero")
  const title = document.querySelector(".home-hero-title")
  const subtitle = document.querySelector(".home-hero-subtitle")
  const cta = document.querySelector(".home-hero-cta")

  let tl = gsap.timeline();

  tl.from(hero, {
    scale: 1.1,
    opacity: 0,
    duration: 1.2,
    ease: "power3.out"
  })
  .from(title, {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  }, "-=0.6")
  .from(subtitle, {
    y: 30,
    opacity: 0,
    duration: 0.6,
    ease: "power3.out"
  }, "-=0.4")
  .from(cta, {
    y: 20,
    opacity: 0,
    duration: 0.4,
    ease: "power3.out"
  }, "-=0.2")
}

function heading() {
  const headings = document.querySelectorAll(".heading")
  
  headings.forEach((heading, index) => {
    ScrollTrigger.create({
      trigger: heading,
      start: "top 80%",
      onEnter: () => {
        gsap.from(heading, {
          y: 50,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.1,
          ease: "power3.out"
        })
      }
    })
  })
}

function gears() {
  const gears = document.querySelectorAll(".gear")
  
  gears.forEach((gear, index) => {
    ScrollTrigger.create({
      trigger: gear,
      start: "top 80%",
      onEnter: () => {
        gsap.to(gear, {
          rotation: 360,
          duration: 2,
          delay: index * 0.2,
          ease: "power2.inOut"
        })
      }
    })
  })
}

function briefAnim() {
  const brief = document.querySelector(".brief")
  const briefItems = document.querySelectorAll(".brief-item")
  
  ScrollTrigger.create({
    trigger: brief,
    start: "top 80%",
    onEnter: () => {
      gsap.from(briefItems, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out"
      })
    }
  })
}

function mile() {
  const mile = document.querySelector(".mile")
  const mileItems = document.querySelectorAll(".mile-item")
  
  ScrollTrigger.create({
    trigger: mile,
    start: "top 80%",
    onEnter: () => {
      gsap.from(mileItems, {
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.7)"
      })
    }
  })
}

function analog() {
  const analog = document.querySelector(".analog")
  const analogItems = document.querySelectorAll(".analog-item")
  
  ScrollTrigger.create({
    trigger: analog,
    start: "top 80%",
    onEnter: () => {
      gsap.from(analogItems, {
        x: -50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out"
      })
    }
  })
}

function blueprint() {
  const blueprint = document.querySelector(".blueprint")
  const blueprintItems = document.querySelectorAll(".blueprint-item")
  
  ScrollTrigger.create({
    trigger: blueprint,
    start: "top 80%",
    onEnter: () => {
      gsap.from(blueprintItems, {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out"
      })
    }
  })
}

function legacy() {
  const legacy = document.querySelector(".legacy")
  const legacyItems = document.querySelectorAll(".legacy-item")
  
  ScrollTrigger.create({
    trigger: legacy,
    start: "top 80%",
    onEnter: () => {
      gsap.from(legacyItems, {
        scale: 0.9,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out"
      })
    }
  })
}

function footer() {
  const footer = document.querySelector(".footer")
  const footerItems = document.querySelectorAll(".footer-item")
  
  ScrollTrigger.create({
    trigger: footer,
    start: "top 80%",
    onEnter: () => {
      gsap.from(footerItems, {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out"
      })
    }
  })
}

// Master Animation Orchestrator
$(document).ready(function() {
    console.log('Animation Engine Initialized');
    
    // Call all animation functions in the correct sequence
    loader();
    nav();
    gauge();
    heading();
    gears();
    briefAnim();
    mile();
    analog();
    blueprint();
    legacy();
    footer();
});