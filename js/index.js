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


var nav = document.getElementById('nav');
var imageOne = document.querySelector('.img-animate');
var textOne = document.querySelector('.text-animate');
var textTwo = document.querySelector('.text-animate-two');
var productCards = document.querySelector('.product-card-container')
var serviceItems = document.querySelectorAll('.services-item');
var textthree = document.querySelector('.text-animation-three');
var lendImg = document.querySelector('.lend-img');
var lendContent = document.querySelector('.lend-content');
var ratingItems = document.querySelectorAll('.rating-item');
var headerText = document.querySelector('.header-text');
var headerImg = document.querySelector('.header-img');
var callOutTitle = document.querySelector('.call-out-title');
var modalBtn = document.querySelector('.modal-btn');

var waypoint = new Waypoint({
    element: document.querySelector('.about-section'),
    handler: function(direction) {
        if (direction === "down") {
            imageOne.classList.add('animated', 'fadeInDown', 'slower', 'display')
            textOne.classList.add('animated', 'fadeInUp', 'slower', 'display')
        } else {
            imageOne.classList.remove('animated', 'fadeInDown', 'slower', 'display')
            textOne.classList.remove('animated', 'fadeInUp', 'slower', 'display')

        }
    },
    offset: '60%'
})
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
var waypoint = new Waypoint({
    element: document.querySelector('.product-section'),
    handler: function(direction) {
        if (direction === "down") {
            textTwo.classList.add('animated', 'fadeInUp', 'slower', 'display')
            productCards.classList.add('animated', 'fadeInUp', 'slower', 'display')
        } else {
            textTwo.classList.remove('animated', 'fadeInUp', 'slower', 'display')
            productCards.classList.remove('animated', 'fadeInUp', 'slower', 'display')
        }
    },
    offset: '60%'
});

var waypoint = new Waypoint({
    element: document.querySelector('.service-section'),
    handler: function(direction) {
        let exindex = 0;
        if (direction === "down") {
            setTimeout(function() {
                serviceItems.forEach((element, index) => {
                    exindex = index;
                    element.classList.add('animated', 'fadeInUp', 'slower', 'display')
                });
            }, 1000 * exindex)

        } else {
            serviceItems.forEach(element => {
                element.classList.remove('animated', 'fadeInUp', 'slower', 'display')
            });
        }
    },
    offset: '60%'
})
var waypoint = new Waypoint({
    element: document.querySelector('.lend-section'),
    handler: function(direction) {
        let exindex = 0;
        if (direction === "down") {
            lendContent.classList.add('animated', 'fadeInUp', 'slower', 'display')
            lendImg.classList.add('animated', 'fadeInUp', 'slower', 'display')

        } else {
            lendContent.classList.remove('animated', 'fadeInUp', 'slower', 'display')
            lendImg.classList.remove('animated', 'fadeInUp', 'slower', 'display')
        }
    },
    offset: '60%'
})

var waypoint = new Waypoint({
    element: document.querySelector('.rating-section'),
    handler: function(direction) {
        if (direction === "down") {
            ratingItems.forEach(el => {
                el.classList.add('animated', 'fadeInUp', 'slower', 'display')
            })
        } else {

            ratingItems.forEach(el => {
                el.classList.remove('animated', 'fadeInUp', 'slower', 'display')
            });
        }
    },
    offset: '60%'
})

new Waypoint({
    element: document.querySelector('#header'),
    handler: function(direction) {
        if (direction === "down") {
            headerText.classList.add('animated', 'fadeInUp', 'slow', 'display')
            headerImg.classList.add('animated', 'zoomIn', 'slow', 'display')
        } else {
            headerText.classList.remove('animated', 'fadeInUp', 'slow', 'display')
            headerImg.classList.remove('animated', 'zoomIn', 'slow', 'display')
        }
    },
    offset: '60%'
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
    element: document.querySelector(".product-section"),
    handler: function(direction) {
        if (direction === "down") {
            btnTop.classList.add('active');
        } else {
            btnTop.classList.remove('active');
        }
    },
    offset: '60%'
})