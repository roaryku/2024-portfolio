const back = document.querySelector('#back');
const next = document.querySelector('#next');

const photos = ["certificates/JS.jpg", "certificates/Bootstrap.jpg", "certificates/GSAP_FIGMA.png", "certificates/ux:ui.jpeg", "certificates/Project Management.jpg", "certificates/React.png"];

let i = 0;

next.addEventListener("click", () => {
    i++;
   if (i > photos.length - 1){
       i = 0;
    }
    document.querySelector("#slide").src = photos[i];
})

back.addEventListener("click", () => {
    i--;
    if (i < 0) {
        i = photos.length -1;
    }
    document.querySelector("#slide").src= photos[i];
})

// Particle - JS


particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 60,
        "density": {
          "enable": true,
          "value_area": 600
        }
      },
      "color": {
        "value": "#00a8c7"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 2,
          "color": "#F9F7F7"
        },
        "polygon": {
          "nb_sides": 9
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 1,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 5,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 1.5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 1.5,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 100,
        "color": "#F2F2F2",
        "opacity": 0.4,
        "width": 3
      },
      "move": {
        "enable": true,
        "speed": 3,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 800,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 100,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 3,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });

 // ANIMATION GSAP

  gsap.to(".name", {
    
    text: "My name is Rodika",
    duration: 4, repeat: -1, repeatDelay: 3, ease: "none", yoyo: true, delay: 3
  })
gsap.from('.aboutMe', {
  scrollTrigger: '.aboutMe',
  y: 60, duration: 1.5, ease:"power2.in", stagger: 1, opacity: 0, delay: .5
})

gsap.from('.myProjects', {
  scrollTrigger: '.myProjects',
  y: 60, duration: 1, ease:"power2.in", stagger: 1, opacity: 0, delay: 1
})

gsap.from('.myCertificates', {
  scrollTrigger: '.myCertificates',
  y: 60, duration: 1.5, ease:"power2.in", stagger: 1, opacity: 0, delay: .5
})

gsap.from('.btnGsap', {
    scrollTrigger: '.btnGsap', 
     duration: 3.5, ease: "power3.Out", stagger: 1, delay: 2.5
})
gsap.from('.comp', {
    scrollTrigger: '.comp', 
    duration: 3.5, ease: "power3.Out", stagger: 1, delay: 2.5, rotation: 180
})
gsap.from('.frontend', {
    scrollTrigger: '.frontend', 
    duration: 1.5, ease: "power2.in", stagger: 1, delay: 1.5, opacity:0
})
gsap.from('.idea-of-project', {
  scrollTrigger: '.idea-of-project', 
  duration: 2.5, ease: "power2.in", stagger: 1, delay: 2.5, opacity:0
})

gsap.from('.btnMail', {
  scrollTrigger: '.btnMail', 
  duration: 2, ease: "power2.in", stagger: 1, delay: 2.5, opacity:0
})
gsap.from('.design', {
    scrollTrigger: '.design', 
    duration: 1.5, ease: "power1", stagger: 1, delay: 1.5
})
gsap.from('.image-about-one', {
    scrollTrigger: '.image-about-one', 
     duration: 1.5, ease: "power4", stagger: 1, delay: 1.5
})
gsap.from('.image-about-two', {
    scrollTrigger: '.image-about-two', 
     duration: 1.5, ease: "power4", stagger: 1, delay: 1.5
})
gsap.from('.text-about', {
  scrollTrigger: '.text-about', 
  y: 100, duration: 1.5, ease: "power4", stagger: 1, delay: 1, opacity:0
})
gsap.from('.text-about-reverse', {
  scrollTrigger: '.text-about-reverse', 
  y: 100, duration: 1.5, ease: "power4", stagger: 1, delay: 1, opacity:0
})
gsap.from('.animSkill-left', {
  scrollTrigger: '.animSkill-left', 
  x: -100, duration: 1.5, ease: "power1", stagger: 1, delay: 1, opacity:0
})
gsap.from('.animSkill-right', {
  scrollTrigger: '.animSkill-right', 
  x: 100, duration: 1.5, ease: "power1", stagger: 1, delay: 1, opacity:0
})
gsap.from('.skills-icon', {
  scrollTrigger: '.skills-icon', 
  rotation: 360, repeat: -1, duration: 3, delay: 1, ease: "power2.inOut"
})
gsap.from('.text-skills', {
  y: 60, duration: .2, ease: "power1", stagger: 1, delay: .2, opacity:0
})
gsap.from('.label-container', {
  scrollTrigger: '.label-container', 
  y: 100, duration: 1.5, ease: "power2", stagger: 1, delay: 1, opacity:0
})
gsap.from('.logoGsapTwo', {
  scrollTrigger: '.logoGsapTwo', 
  y: 100, duration: 2, ease: "power2", stagger: 1, delay: 2, opacity:0
})
gsap.from('.images-decor', {
  scrollTrigger: '.images-decor', 
  rotation: 360, repeat: -1, duration: 3, delay: 1, ease: "power2.inOut"
})
gsap.from('.image-decor', {
  scrollTrigger: '.image-decor', 
  rotation: 360, repeat: -1, duration: 3, delay: 1, ease: "power2.inOut"
})
gsap.from('.input-button', {
  scrollTrigger: '.input-button', 
  y: 100, duration: 2, ease: "power2", stagger: 1, delay: 1.5, opacity:0
})
gsap.from('.flip-card', {
  scrollTrigger: '.flip-card', 
  duration: 2, ease: "power2.in", stagger: 1, delay: 1.5, opacity:0
})
gsap.from('#container-certificates', {
  scrollTrigger: '#container-certificates', 
  duration: 2, ease: "power2.in", stagger: 1, delay: 1.5, opacity:0
})

