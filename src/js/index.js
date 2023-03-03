let scrollAnimation =  ScrollReveal({
    origin: 'top',
    duration: 2000,
    distance: '80px'
});

scrollAnimation.reveal('.question-list', {delay: 400});
scrollAnimation.reveal('.hero-img', { origin: 'left', delay: 400});
scrollAnimation.reveal('.heading', {origin: 'left', delay: 800});
scrollAnimation.reveal('.paragraph', {origin: 'bottom', delay: 1000});
scrollAnimation.reveal('.list-box .description', {delay: 1400});
scrollAnimation.reveal('.list-box .img', {origin: 'left', delay: 1800});
scrollAnimation.reveal('.logo img', {delay: 400});
scrollAnimation.reveal('.Hamburger', {delay: 700});

if(window.outerWidth >= 799){
    scrollAnimation.reveal('.nav-bar .side-bar', {orign: 'right'});
}

VanillaTilt.init(document.querySelectorAll('.img img'), {
    max: 50,
    speed: 1000,
    glare: true, 
    'max-glare': 1
})
VanillaTilt.init(document.querySelectorAll('.hero-img img'), {
    max: 10,
    speed: 3000,
    glare: true, 
    'max-glare': 1
})
VanillaTilt.init(document.querySelectorAll('.logo img'), {
    max: 20,
    speed: 1000,
    glare: true, 
    'max-glare': 1
})
VanillaTilt.init(document.querySelectorAll('.question-list'), {
    max: 3,
    speed: 1000,
    glare: false, 
    'max-glare': 1
})
VanillaTilt.init(document.querySelectorAll('.heading'), {
    max: 2,
    speed: 1000,
    glare: false, 
    'max-glare': 1
})




