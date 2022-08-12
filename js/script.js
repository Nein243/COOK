let profileBtn = document.querySelector('.header__profile');
let profileMenu = document.querySelector('.profile-menu');
let profileCloseBtn = document.querySelector('.profile-menu__close');

profileBtn.addEventListener('click', function () {
    profileMenu.classList.toggle('active');
});

profileCloseBtn.addEventListener('click', function () {
    profileMenu.classList.remove('active');
});


const swiper = new Swiper('.slider-main', {
    pagination: {
        el: '.swiper-pagination',
    },
    slidesPerView: 1,
    spaceBetween: 80,
    autoHeight: true,
    autoplay: {
        delay: 5000,
    },
    speed: 400,

})