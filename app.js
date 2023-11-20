let lang = document.querySelector('.language');
let box = document.querySelector('.langs');
let manulist = document.querySelector('.manu');
let sidebarlist = document.querySelector('.sidebar')
let line1 = document.querySelector('.line1')
let line2 = document.querySelector('.line2')
let line3 = document.querySelector('.line3')
let lines = document.querySelector('.line')
let m = document.querySelector('.lines')
let textshow = document.querySelector('.text-show')
let moon = document.querySelector('.moon');
let sun = document.querySelector('.sun');
let cont = document.querySelector('.cont')
let bg = document.querySelector('.bg');
let list = document.querySelectorAll('li')
let lsit2 = document.querySelector('ul')


console.log(lsit2)

moon.addEventListener('click', () => {

    cont.classList.toggle('backinfo')
})
sun.addEventListener('click', () => {
    cont.classList.toggle('backred')


})





lang.addEventListener('click', () => {
    box.classList.toggle('show')
})

manulist.addEventListener('click', () => {
    sidebarlist.classList.toggle('side-show')
    m.classList.toggle('top-style')
    line1.classList.toggle('line1-style')
    line3.classList.toggle('line3-style')
    line2.classList.toggle('line2-style')
    if (textshow.innerHTML === 'MENU') {
        textshow.innerHTML = 'CLOSED'
    } else {
        textshow.innerHTML = 'MENU'
    }
    list.forEach((li, index) => {
        li.addEventListener('mouseenter', () => {
            bg.innerHTML = li.innerHTML;
        })
    })
    lsit2.classList.toggle('animate');

})




particlesJS("particles-js", {"particles":{"number":{"value":317,"density":{"enable":true,"value_area":721.5354273894853}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":0.36076771369474264,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":8.017060304327615,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":6,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"repulse"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);;