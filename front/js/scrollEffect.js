var sr;
window.sr = new ScrollReveal({ reset: true });

var slideUp = {
    duration   : 700,
    distance: 0,
    easing : 'ease-in-out',
    origin: 'bottom',
    scale : 1,
    viewFactor : 0,
    opacity: null
};

var slideLeft = {
    duration   : 1200,
    distance: '100%',
    easing : 'ease-in-out',
    origin: 'left',
    scale : 1,
    viewFactor : 0,
    delay : 200,
    opacity: 0.01
};

var slideRight = {
    duration   : 1000,
    distance: '100%',
    easing : 'ease-in-out',
    origin: 'right',
    scale : 1,
    viewFactor : 0,
    opacity: 0.01, 
    delay : 200
};

var slideDown = {
    duration   : 1250,
    distance: 0,
   
    easing : 'ease-in-out',
    origin: 'top',
    desktop: true,
    scale : 1,
    reset      : true,
    viewFactor : 0,
    opacity: 0.01
};

var iconsFooter = {
    duration : 1800,
    distance: '100%',
    origin: "top",
    easing : 'ease-out',
    origin: 'top',
    desktop: true,
    scale : 1,
    reset: true,
    viewFactor : 0,
    opacity: 0.01
};

sr.reveal('.nav', slideLeft);

sr.reveal('.section-1', slideRight);
sr.reveal('.section-2', slideLeft);
sr.reveal('.nos-projets', slideDown);

sr.reveal('#contact', slideDown);

sr.reveal('footer', slideRight);

sr.reveal('.icon1', iconsFooter, {delay: 30});
sr.reveal('.icon2', iconsFooter, {delay: 50});
sr.reveal('.icon3', iconsFooter, {delay: 100});

sr.reveal('.icon4', iconsFooter, {delay: 200});

sr.reveal('.icon5', iconsFooter);