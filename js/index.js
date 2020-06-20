var closeBtn = document.querySelector('.close');
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
// var imageOne = document.querySelector('.img-animate');
var textOne = document.querySelector('.text-animate');
// var flexSectionOne = document.querySelectorAll('.flex-section-item')[0];
// var flexSectionTwo = document.querySelectorAll('.flex-section-item')[1]
var serviceItems = document.querySelectorAll('.services-item');
var textthree = document.querySelector('.text-animation-three');
// var lendImg = document.querySelector('.lend-img');
var lendContent = document.querySelector('.lend-content');
var ratingItems = document.querySelectorAll('.rating-item');
var headerText = document.querySelector('.header-text');
var headerImg = document.querySelector('.header-img');
// var aboutTwoContentTwo = document.querySelector('.about-two-content-two');
// var aboutOneContentOne = document.querySelector('.about-one-content-one');

var waypoint = new Waypoint({
    element: document.querySelector('.about-section'),
    handler: function(direction) {
        if (direction === "down") {
            // imageOne.classList.add('animated', 'fadeInDown', 'slower', 'display')
            textOne.classList.add('animated', 'fadeInUp', 'slower', 'display')
        }
        // else {
        //     // imageOne.classList.remove('animated', 'fadeInDown', 'slower', 'display')
        //     textOne.classList.remove('animated', 'fadeInUp', 'slower', 'display')

        // }
    },
    offset: '60%'
});



var waypoint = new Waypoint({
    element: document.querySelector('.service-section'),
    handler: function(direction) {
        let exindex = 0;
        if (direction === "down") {

            serviceItems.forEach((element, index) => {
                setTimeout(function() {
                    element.classList.add('animated', 'fadeInUp', 'fast', 'display')
                }, 300 * index)
            });


        }

    },
    offset: '60%'
});


var waypoint = new Waypoint({
    element: document.querySelector('.lend-section'),
    handler: function(direction) {
        let exindex = 0;
        if (direction === "down") {
            lendContent.classList.add('animated', 'fadeInUp', 'fast', 'display')
                // lendImg.classList.add('animated', 'fadeInUp', 'slower', 'display')

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


// var editor = ace.edit("editor");
// editor.setTheme("ace/theme/twilight");
// editor.setOptions({
//     autoScrollEditorIntoView: true,
//     copyWithEmptySelection: true,
// });
// editor.session.setMode("ace/mode/javascript");

var editor = ace.edit('editor');
var txtAra = document.querySelector('textarea[name="editor"]');
var jsbOpts = {
    indent_size: 2
};

editor.setTheme("ace/theme/cobalt");
editor.getSession().setMode("ace/mode/java");
syncEditor();


// Main Logic
setTimeout(formatCode, 1000); // Format sample Java after 1 second.

// Functions
function syncEditor() {
    editor.getSession().setValue(txtAra.value);
}

function commitChanges() {
    txtAra.value = editor.getSession().getValue();
}

function formatCode() {
    var session = editor.getSession();
    session.setValue(js_beautify(session.getValue(), jsbOpts));
}


window.onload = function() {
    Particles.init({
        selector: '.header-bg',
        color: "#ffffff",
        connectedParticles: true,
        sizeVariations: 4,
    });
};



var firstText = 'Consumer credit';
var secondText = 'Digital Lending';
var thirdText = 'Identity analysis';
var fourthText = 'Omni collection';
var fifthText = 'P2P Lending';


var changingText = [firstText, secondText, thirdText, fourthText, fifthText];
var turn = changingText[1];
var turnTrace = 0


let swapText = document.querySelector('.swap-text');

function writeText(text) {
    swapText.innerHTML = "";
    for (let index = 0; index < text.length; index++) {
        setTimeout(function() {
            appendText(text, index)
        }, 180 * index)
    }
}

function backspace(text) {
    for (let index = 0; index <= text.length; index++) {
        setTimeout(function() {
            removeText(text, index)
        }, 100 * index)
    }
}

function appendText(text, index) {
    swapText.innerHTML += text[index];
}

function removeText(text, index) {
    swapText.innerHTML = swapText.innerHTML.slice(0, text.length - index);
}

function startBackspace() {
    setInterval(function() {
        if (swapText.innerHTML.trim().length === turn.length) {
            backspace(swapText.innerHTML);
            changeTurn();
        }
    }, 10000)
}


function startWrite() {
    let time = 1000;
    setInterval(function() {

        if (swapText.innerHTML.trim().length === 0) {
            writeText(turn);
        }
    }, time)
}


function changeTurn() {
    turn = changingText[turnTrace++];
    if (turnTrace === changingText.length)
        turnTrace = 0;
}

//first do backspace action when page loads
backspace(firstText);

startBackspace(changingText);
startWrite(changingText);









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



