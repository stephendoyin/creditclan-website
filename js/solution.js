var modal = document.querySelector('.modal');
var modaltriggerBtn = document.querySelector('.modal-btn');
var closeBtn = document.querySelector('.close');
var mobileNav = document.querySelector('.nav-mobile');
var menuIconBtn = document.querySelector('.menu-icon');

// open modal with contact us button
modaltriggerBtn.addEventListener("click", function(e) {
    e.preventDefault();
    console.log('clicked');
    openModal()
});

// close modal with close button
closeBtn.addEventListener('click', function(e) {
    closeModal();
})

// close modal with outside area click
modal.addEventListener('click', function(e) {
    console.log(e.target.classList)
    if (e.target.classList[0] === 'modal')
        closeModal();
})

function openModal() {
    modal.classList.add("show");
    document.body.style.overflow = "hidden";
}

function closeModal() {
    modal.classList.remove("show");
    document.body.style.overflow = 'auto';
}

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
    element: document.querySelectorAll(".solution-l-section")[0],
    handler: function(direction) {
        if (direction === "down") {
            btnTop.classList.add('active');
        } else {
            btnTop.classList.remove('active');
        }
    },
    offset: '60%'
})


// waypoints animation
var headerText = document.querySelector('.header-text');

new Waypoint({
    element: document.querySelector('header'),
    handler: function(direction) {
        if (direction === "down") {
            headerText.classList.add('animated', 'fadeInUp', 'slow', 'display');
        } else {
            headerText.classList.remove('animated', 'fadeInUp', 'slow', 'display');
        }
    },
    offset: '60%'
})


// var headerText = document.querySelector('.header-text');
var solutionText = document.querySelector('.solution-text');
var solutionImg = document.querySelector('.solution-image');


new Waypoint({
    element: document.querySelector('.solution-section'),
    handler: function(direction) {
        if (direction === "down") {
            solutionText.classList.add('animated', 'fadeInUp', 'slow', 'display');
            solutionImg.classList.add('animated', 'fadeInUp', 'slow', 'display');
        } else {
            solutionText.classList.remove('animated', 'fadeInUp', 'slow', 'display');
            solutionImg.classList.remove('animated', 'fadeInUp', 'slow', 'display');
        }
    },
    offset: '60%'
})


var callOutTitle = document.querySelector('.call-out-title');
var modalBtn = document.querySelector('.modal-btn');

var waypoint = new Waypoint({
    element: document.querySelector(".call-out-section"),
    handler: function(direction) {
        if (direction === "down") {
            modalBtn.classList.add('animated', 'fadeInDown', 'slower', 'display')
            callOutTitle.classList.add('animated', 'fadeInUp', 'slower', 'display')
        } else {
            modalBtn.classList.remove('animated', 'fadeInDown', 'slower', 'display')
            callOutTitle.classList.remove('animated', 'fadeInUp', 'slower', 'display')

        }
    },
    offset: '60%'
})


var featuredItem = document.querySelectorAll('.featured-item');


var waypoint = new Waypoint({
    element: document.querySelector(".featured-product"),
    handler: function(direction) {
        if (direction === "down") {
            featuredItem.forEach((element) => {
                element.classList.add('animated', 'fadeInUp', 'slower', 'display')
            });
        } else {
            featuredItem.forEach((element) => {

                element.classList.remove('animated', 'fadeInUp', 'slower', 'display')
            });
        }
    },
    offset: '60%'
})




window.addEventListener('load', function() {
    var scrollBtn = document.querySelector('.scrollBtn');
    var elmnt = document.querySelector(".solution-section");


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


let solutionFirstEl = document.querySelectorAll('.solution-list-item')[0];
let solutionSecondEl = document.querySelectorAll('.solution-list-item')[1];

var waypoint = new Waypoint({
    element: document.querySelectorAll(".solution-l-section")[0],
    handler: function(direction) {
        if (direction === "down") {
            solutionFirstEl.classList.add('animated', 'fadeInDown', 'slower', 'display')
            solutionSecondEl.classList.add('animated', 'fadeInUp', 'slower', 'display')
        } else {
            solutionFirstEl.classList.remove('animated', 'fadeInDown', 'slower', 'display')
            solutionSecondEl.classList.remove('animated', 'fadeInUp', 'slower', 'display')

        }
    },
    offset: '60%'
})




let solutionThirdEl = document.querySelectorAll('.solution-list-item')[2];
let solutionFourthEl = document.querySelectorAll('.solution-list-item')[3];


var waypoint = new Waypoint({
    element: document.querySelectorAll(".solution-l-section")[1],
    handler: function(direction) {
        if (direction === "down") {
            solutionThirdEl.classList.add('animated', 'fadeInDown', 'slower', 'display')
            solutionFourthEl.classList.add('animated', 'fadeInUp', 'slower', 'display')
        } else {
            solutionThirdEl.classList.remove('animated', 'fadeInDown', 'slower', 'display')
            solutionFourthEl.classList.remove('animated', 'fadeInUp', 'slower', 'display')

        }
    },
    offset: '60%'
})

let solutionFifthEl = document.querySelectorAll('.solution-list-item')[4];
let solutionSixthEl = document.querySelectorAll('.solution-list-item')[5];


var waypoint = new Waypoint({
    element: document.querySelectorAll(".solution-l-section")[2],
    handler: function(direction) {
        if (direction === "down") {
            solutionFifthEl.classList.add('animated', 'fadeInDown', 'slower', 'display')
            solutionSixthEl.classList.add('animated', 'fadeInUp', 'slower', 'display')
        } else {
            solutionFifthEl.classList.remove('animated', 'fadeInDown', 'slower', 'display')
            solutionSixthEl.classList.remove('animated', 'fadeInUp', 'slower', 'display')

        }
    },
    offset: '60%'
})

let solutionSeventhEl = document.querySelectorAll('.solution-list-item')[6];
let solutionEighthEl = document.querySelectorAll('.solution-list-item')[7];


var waypoint = new Waypoint({
    element: document.querySelectorAll(".solution-l-section")[3],
    handler: function(direction) {
        if (direction === "down") {
            solutionSeventhEl.classList.add('animated', 'fadeInDown', 'slower', 'display')
            solutionEighthEl.classList.add('animated', 'fadeInUp', 'slower', 'display')
        } else {
            solutionSeventhEl.classList.remove('animated', 'fadeInDown', 'slower', 'display')
            solutionEighthEl.classList.remove('animated', 'fadeInUp', 'slower', 'display')

        }
    },
    offset: '60%'
})