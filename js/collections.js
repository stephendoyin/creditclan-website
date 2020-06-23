var mySwiper2 = new Swiper('#swiper-container2', {

    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    speed: 6000,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
    breakpoints: {
        540: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        680: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        880: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        1080: {
            slidesPerView: 5,
            spaceBetween: 20,
        },
        1280: {
            slidesPerView: 6,
            spaceBetween: 20,
        },
    }

})


var waypoint = new Waypoint({
    element: document.querySelector(".solution-l-section"),
    handler: function(direction) {
        if (direction === "down") {
            btnTop.classList.add('active');
        } else {
            btnTop.classList.remove('active');
        }
    },
    offset: '0%'
})


window.onload = function() {
    Particles.init({
        selector: '.lend-bg',
        color: "#b8e3fb",
        connectedParticles: true,
        sizeVariations: 67,
        maxParticles: 10,
    });
};



let headerBtn = document.querySelector('.header-btn');
let mainHeaderLength = document.querySelector('.lending').clientHeight/2;

headerBtn.addEventListener('click', function(e){
    e.preventDefault();
    window.scrollTo({
        top: mainHeaderLength,
        left: 0,
        behavior: "smooth"
    })
});