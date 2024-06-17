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

 // ANIMATION GSAP

