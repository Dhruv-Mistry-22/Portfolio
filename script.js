// Toggle menu
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('header');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// On scroll: remove menu toggle + add shadow to header
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
    header.classList.toggle('shadow', window.scrollY > 0);
}

// ScrollReveal Animation
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
});

sr.reveal('.home-text', { delay: 200, origin: 'top' });
sr.reveal('.home-img', { delay: 400, origin: 'top' });
sr.reveal('.about-title, .about-text, .heading, .box, input, textarea, .social a', {
    delay: 200,
    origin: 'top'
});
