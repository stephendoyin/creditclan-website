var faqText = document.querySelectorAll('.faq__content');
var faqHeader = document.querySelectorAll('.faq__header');
var faqItem = document.querySelectorAll('.faq__item');
animHeight();
triggerEvent();



function triggerEvent() {
    window.addEventListener('resize', () => {
        animHeight();
    })
}

function animHeight() {
    faqHeader.forEach((element, i) => {
        faqItem[i].style.height = `${element.clientHeight}px`;

        element.addEventListener('click', (e) => {
            changeHeight(e, i)
        });

    });
}

function changeHeight(e, i) {
    faqItem.forEach((element, x) => {
        if (i !== x) {
            faqItem[x].style.height = `${faqHeader[x].clientHeight}px`;
            faqHeader[x].classList.remove("active");
        } else if ((i === x) && (element.clientHeight > (this.faqHeader[x].clientHeight + 2))) {
            element.style.height = `${faqHeader[x].clientHeight}px`;
            faqHeader[i].classList.remove("active");
        } else {
            faqHeader[i].classList.add('active');
            faqItem[i].style.height = `${faqHeader[x].clientHeight + 17 + faqText[x].clientHeight}px`
        }

    })
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


var waypoint = new Waypoint({
    element: document.querySelector(".pricing-section"),
    handler: function(direction) {
        if (direction === "down") {
            btnTop.classList.add('active');
        } else {
            btnTop.classList.remove('active');
        }
    },
    offset: '0%'
})
