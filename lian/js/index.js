let swiper = new Swiper('.swiper-container', {
    cssMode: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
});
let mobileMenu = document.getElementById('mobile-menu');
document.getElementById('burger-js').onclick = function () {
    this.classList.toggle('burger-on');
    mobileMenu.classList.toggle('mobile-menu-on')
};


