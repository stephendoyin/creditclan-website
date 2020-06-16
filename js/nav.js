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




var mobileNav = document.querySelector('.nav-mobile');
var menuIconBtn = document.querySelector('.menu-icon');
var navigation = document.querySelector('#nav');


menuIconBtn.addEventListener('click', function(e) {
    e.preventDefault();
    toggleModal();
});

function toggleModal() {
    if (mobileNav.classList.contains('open')) {
        mobileNav.classList.remove('open');
        document.body.style.overflow = 'auto';
        navigation.classList.remove('white-bg')

    } else {
        mobileNav.classList.add('open');
        document.body.style.overflow = 'hidden';
        navigation.classList.add('white-bg');
    }
}


let btnTop = document.querySelector('.btn-top');

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


var mobileLinkList = document.querySelectorAll('.mobile-dropdown')[0];
var mobileLinkListTwo = document.querySelectorAll('.mobile-dropdown')[1];
var mobileLinkListThree = document.querySelectorAll('.mobile-dropdown')[2];
var subLinks = document.querySelector('.sub-links');
var subLinksTwo = document.querySelector('.sub-links-two');
var subLinksThree = document.querySelector('.sub-links-three');
var mobilePlus = document.querySelector('.mobile-plus');
var mobileMinus = document.querySelector('.mobile-minus');
var mobilePlusTwo = document.querySelector('.mobile-plus-two');
var mobileMinusTwo = document.querySelector('.mobile-minus-two');
var mobilePlusThree = document.querySelector('.mobile-plus-three');
var mobileMinusThree = document.querySelector('.mobile-minus-three');

mobileLinkList.addEventListener('click', function() {
    subLinks.classList.toggle("open");
    mobileMinus.classList.toggle('show');
    mobilePlus.classList.toggle('show');
})
mobileLinkListTwo.addEventListener('click', function() {
    subLinksTwo.classList.toggle("open");
    mobileMinusTwo.classList.toggle('show');
    mobilePlusTwo.classList.toggle('show');
})
mobileLinkListThree.addEventListener('click', function() {
    subLinksThree.classList.toggle("open");
    mobileMinusThree.classList.toggle('show');
    mobilePlusThree.classList.toggle('show');
})



