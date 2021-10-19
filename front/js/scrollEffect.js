var slideUp = {
    distance: '150%',
    origin: 'bottom',
    opacity: null
};

var slideLeft = {
    distance: '100%',
    
    origin: 'left',
    opacity: null
};

var slideRight = {
    distance: '100%',
    
    origin: 'right',
    opacity: null
};

var slideDown = {
    distance: '100%',
    origin: 'top',
    opacity: null
};

ScrollReveal().reveal('.nav', slideLeft);

ScrollReveal().reveal('.section-1', slideRight);
ScrollReveal().reveal('.section-2', slideLeft);

ScrollReveal().reveal('.nos-projets', slideDown);

ScrollReveal().reveal('#contact', slideUp);

ScrollReveal().reveal('footer', slideDown);