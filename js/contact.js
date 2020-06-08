let last_known_scroll_position = window.scrollY;

document.addEventListener('scroll', function() {
    if (window.scrollY > 100) {
        if (last_known_scroll_position > window.scrollY) {
            nav.classList.add("scrolled");
            nav.classList.remove('hide');
        } else {
            nav.classList.remove('scrolled');
            nav.classList.add('hide');

        }
        last_known_scroll_position = window.scrollY;
    } else {
        nav.classList.remove('scrolled');
        nav.classList.remove('hide');

    }

})

var waypoint = new Waypoint({
    element: document.querySelector(".section-contact"),
    handler: function(direction) {
        if (direction === "down") {
            btnTop.classList.add('active');
        } else {
            btnTop.classList.remove('active');
        }
    },
    offset: '60%'
})



var mobileNav = document.querySelector('.nav-mobile');
var menuIconBtn = document.querySelector('.menu-icon');


menuIconBtn.addEventListener('click', function(e) {
    e.preventDefault();
    toggleModal();
});

function toggleModal() {
    if (mobileNav.classList.contains('open')) {
        mobileNav.classList.remove('open', 'slideInDown', 'fast', 'animated');
        document.body.style.overflow = 'auto';

    } else {
        mobileNav.classList.add('open', 'slideInDown', 'fast', 'animated');
        document.body.style.overflow = 'hidden';

    }
}




var contactMainItem = document.querySelectorAll('.contact-main-item')

new Waypoint({
    element: document.querySelector('.section-contact'),
    handler: function(direction) {
        if (direction === "down") {
            contactMainItem[0].classList.add('animated', 'fadeInUp', 'slow', 'display');
            contactMainItem[1].classList.add('animated', 'fadeInUp', 'slow', 'display');
        } else {
            contactMainItem[0].classList.remove('animated', 'fadeInUp', 'slow', 'display');
            contactMainItem[1].classList.remove('animated', 'fadeInUp', 'slow', 'display');
        }
    },
    offset: '60%'
})



window.addEventListener('load', function() {
    var scrollBtn = document.querySelector('.scrollBtn');
    var elmnt = document.querySelector(".section-contact");


    scrollBtn.addEventListener('click', function(e) {
        e.preventDefault();
        scrollTo(elmnt)
    });


    function scrollTo(element) {
        window.scrollBy({
            behavior: 'smooth',
            left: 0,
            top: element.offsetTop
        });
    }
})


let btnTop = document.querySelector('.btn-top')

btnTop.addEventListener('click', function(e) {
    e.preventDefault();
    scrollToTop(1000);
})


function scrollToTop(scrollDuration) {
    const scrollHeight = window.scrollY,
        scrollStep = Math.PI / (scrollDuration / 15),
        cosParameter = scrollHeight / 2;
    var scrollCount = 0,
        scrollMargin,
        scrollInterval = setInterval(function() {
            if (window.scrollY != 0) {
                scrollCount = scrollCount + 1;
                scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep);
                window.scrollTo(0, (scrollHeight - scrollMargin));
            } else clearInterval(scrollInterval);
        }, 15);
}

window.onload = function() {
    Particles.init({
        selector: '.lend-bg',
        color: "#b8e3fb",
        connectedParticles: true,
        sizeVariations: 67,
        maxParticles: 10,
    });
};