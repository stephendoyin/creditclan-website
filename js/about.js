var mySwiper2 = new Swiper('#swiper-container', {
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 6000,
    breakpoints: {
        470: {
            slidesPerView: 2,
            spaceBetween: 20,
        },

        760: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1100: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    },
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },

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

var nav = document.getElementById('nav');
var swiper = new Swiper('#swiper-container-testimonial', {
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // spaceBetween: 20,
    autoplay: {
        delay: 3500
    }
})


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



var aboutContentTwo = document.querySelector('.about-content-two');
var aboutContentone = document.querySelector('.about-content-one');
var aboutContentTwoExt = document.querySelector('.about-content-one--about');
var aboutContentoneExt = document.querySelector('.about-content-two--about');




var waypoint = new Waypoint({
    element: document.querySelector(".p-about-section--colored"),
    handler: function(direction) {
        if (direction === "down") {
            aboutContentTwoExt.classList.add('animated', 'fadeInDown', 'slower', 'display')
            aboutContentoneExt.classList.add('animated', 'fadeInUp', 'slower', 'display')
        }
    },
    offset: '60%'
})

var waypoint = new Waypoint({
    element: document.querySelector(".p-about-section"),
    handler: function(direction) {
        if (direction === "down") {
            aboutContentTwo.classList.add('animated', 'fadeInDown', 'slower', 'display')
            aboutContentone.classList.add('animated', 'fadeInUp', 'slower', 'display')
        }
    },
    offset: '60%'
})



var tabItem = document.querySelectorAll('.tab-item');
var tab = document.querySelector('.tab');
var tabSection = document.querySelectorAll('.tab-section');

tabItem.forEach(function(el, i) {
    el.addEventListener('click', function(e) {
        e.preventDefault();
        changeActiveTab(i);
    })
});

function changeActiveTab(index) {
    removeActiveTab();
    addActiveToClickedTab(index)
}

function removeActiveTab() {
    tabItem.forEach(function(el, i) {
        el.classList.remove('active');
        tabSection[i].classList.remove('active');
    })
}

function addActiveToClickedTab(index) {
    tabItem[index].classList.add('active');
    tabSection[index].classList.add('active');
}


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


var waypoint = new Waypoint({
    element: document.querySelector(".p-about-section"),
    handler: function(direction) {
        if (direction === "down") {
            btnTop.classList.add('active');
        } else {
            btnTop.classList.remove('active');
        }
    },
    offset: '60%'
})



window.addEventListener('load', function() {
    var scrollBtn = document.querySelector('.scrollBtn');
    var elmnt = document.querySelectorAll(".p-about-section")[0];


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

window.onload = function() {
    Particles.init({
        selector: '.lend-bg',
        color: "#b8e3fb",
        connectedParticles: true,
        sizeVariations: 67,
        maxParticles: 10,
    });
};