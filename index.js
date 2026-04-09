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

const homeIntro = gsap.timeline({ defaults: { ease: "power2.out" } });

homeIntro
  .from('#logo .logo-image-header', { y: -12, opacity: 0, duration: .95 })
  .from('#logo h1', { y: 12, opacity: 0, duration: .85 }, '-=.3')
  .from('#logo .par', { y: 10, opacity: 0, duration: .8 }, '-=.25')
  .from('#logo .cta', { y: 8, opacity: 0, duration: .65, stagger: .05 }, '-=.2')
  .from('#logo .header_btn .btnMail', { y: 8, opacity: 0, duration: .75 }, '-=.2');

  gsap.to(".name", {
    
    text: "My name is Rodika",
    duration: 4.2, repeat: -1, repeatDelay: 3.1, ease: "none", yoyo: true, delay: 2.8
  })
gsap.from('.aboutMe', {
  scrollTrigger: { trigger: '.aboutMe', start: 'top 85%' },
  y: 24, duration: 1.55, ease:"power2.out", stagger: .1, opacity: 0, delay: 0
})

gsap.from('.myProjects', {
  scrollTrigger: { trigger: '.myProjects', start: 'top 85%' },
  y: 16, duration: 1.35, ease:"power2.out", stagger: .1, opacity: 0, delay: 0
})

gsap.from('.myCertificates', {
  scrollTrigger: { trigger: '.myCertificates', start: 'top 85%' },
  y: 16, duration: 1.35, ease:"power2.out", stagger: .1, opacity: 0,
})
gsap.from('.frontend', {
    scrollTrigger: { trigger: '.frontend', start: 'top 86%' }, 
    y: 14, duration: 1.2, ease: "power2.out", stagger: .1, delay: 0, opacity:0
})
gsap.from('.idea-of-project', {
  scrollTrigger: { trigger: '.idea-of-project', start: 'top 86%' }, 
  y: 14, duration: 1.3, ease: "power2.out", stagger: .1, opacity:0, delay: 0
})

gsap.from('.btnMail', {
  scrollTrigger: { trigger: '.btnMail', start: 'top 88%' }, 
  y: 12, duration: 1.2, ease: "power2.out", stagger: .1, delay: 0, opacity:0
})
gsap.from('.animSkill-left', {
  scrollTrigger: { trigger: '.animSkill-left', start: 'top 86%' }, 
  x: -44, duration: 1.35, ease: "power2.out", stagger: .1, delay: 0, opacity:0
})
gsap.from('.animSkill-right', {
  scrollTrigger: { trigger: '.animSkill-right', start: 'top 86%' }, 
  x: 44, duration: 1.35, ease: "power2.out", stagger: .1, delay: 0, opacity:0
})
gsap.from('.skills-icon', {
  scrollTrigger: '.skills-icon', 
  rotation: 360, repeat: -1, duration: 3, delay: .2, ease: "power2.inOut"
})
gsap.from('.text-skills', {
  y: 16, duration: .9, ease: "power2.out", stagger: .07, delay: 0, opacity:0
})
gsap.from('.header-input .label-container', {
  scrollTrigger: { trigger: '.header-input', start: 'top 88%' }, 
  y: 10, duration: 1.25, ease: "power2.inOut", stagger: .22, delay: 0, opacity:0
})
gsap.from('.logoGsapTwo', {
  scrollTrigger: { trigger: '.logoGsapTwo', start: 'top 86%' }, 
  y: 32, duration: 1.5, ease: "power2.out", stagger: .1, delay: 0, opacity:0
})
gsap.from('.images-decor', {
  scrollTrigger: '.images-decor', 
  rotation: 360, repeat: -1, duration: 3, delay: .2, ease: "power2.inOut"
})
gsap.from('.image-decor', {
  scrollTrigger: '.image-decor', 
  rotation: 360, repeat: -1, duration: 3, delay: .2, ease: "power2.inOut"
})
gsap.from('.input-button', {
  scrollTrigger: { trigger: '.input-button', start: 'top 88%' }, 
  y: 8, duration: 1.55, ease: "power2.inOut", stagger: .05, delay: 0, opacity:0
})
gsap.from('.proj-container', {
  scrollTrigger: { trigger: '.proj-container', start: 'top 88%' }, 
  y: 14, duration: 1.2, ease: "power2.out", stagger: .08, delay: 0, opacity:0
})
gsap.from('#container-certificates', {
  scrollTrigger: { trigger: '#container-certificates', start: 'top 88%' }, 
  y: 14, duration: 1.15, ease: "power2.out", stagger: .08, delay: 0, opacity:0
})

