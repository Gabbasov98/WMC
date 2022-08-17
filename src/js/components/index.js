let guarantorTabs = document.querySelectorAll(".guarantors-tab")

function guarantorsSlider() {
    var swiper = new Swiper('.guarantors__slider .swiper-container', {
        slidesPerView: 1,
        spaceBetween: 0,
        effect: 'fade',
        allowTouchMove: false,
        fadeEffect: {
            crossFade: true
        },
        speed: 700,
        scrollbar: {
            el: '.guarantors__slider .swiper-scrollbar',
            draggable: true,
        },
    })

    guarantorTabs.forEach(el=>{
        el.onclick = function () {
            let attr = +el.getAttribute("data-tab-path")
            swiper.slideTo(attr)
            guarantorTabs.forEach(el=>{
                el.classList.remove("guarantors-tab--active")
            })
            el.classList.add("guarantors-tab--active")
        }
    })
}

function guarantorsTabsSlider() {
    var swiper = new Swiper('.guarantors__tabs .swiper-container', {
        spaceBetween: 30,
        breakpoints: {
            320: {
                slidesPerView: "auto",
            },
            1200: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        }
    })
}


guarantorsSlider()
guarantorsTabsSlider()



