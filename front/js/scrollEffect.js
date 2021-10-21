var sr;
window.sr = new ScrollReveal({ reset: true });

var slideUp = {
    duration   : 600,
    easing : 'ease-in-out',
    origin: 'bottom',
    scale : 1,
    viewFactor : 0,
    opacity: null
};

var slideLeft = {
    duration   : 600,
    distance: '100%',
    easing : 'ease-out',
    origin: 'left',
    scale : 1,
    viewFactor : 0,
    delay : 200,
    opacity: 0.01
};

var slideRight = {
    duration   : 600,
    distance: '100%',
    easing : 'ease-in-out',
    origin: 'right',
    scale : 1,
    viewFactor : 0,
    opacity: 0.01, 
    delay : 200
};

var slideDown = {
    duration   : 600,
    distance: '100%',
    duration   : 500,
    easing : 'ease-in-out',
    origin: 'top',
    desktop: true,
    scale : 1,
    reset      : true,
    viewFactor : 0,
    opacity: 0.01
};

sr.reveal('.nav', slideLeft);

sr.reveal('.section-1', slideRight);
sr.reveal('.section-2', slideLeft);
sr.reveal('.nos-projets', slideDown);

sr.reveal('#contact', slideDown);

sr.reveal('footer', slideRight);