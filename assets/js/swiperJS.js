var swiper = new Swiper('.courses-slide .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    loop: false,
    loopFillGroupWithBlank: true,

    navigation: {
        nextEl: ".courses-slide .button-next",
        prevEl: ".courses-slide .button-prev",
    },
});