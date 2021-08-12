var coursesSlides = new Swiper('.courses-slide .swiper-container', {
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

var reviews = new Swiper('.comment-slide .swiper-container', {
    slidesPerView: 2,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: true,

    navigation: {
        nextEl: ".comment-slide .button-next-comment",
        prevEl: ".comment-slide .button-prev-comment",
    },
});
var coOperateSlides = new Swiper('.co-operate-slide .swiper-container', {
    slidesPerView: 6,
    spaceBetween: 30,
    slidesPerGroup: 1,
    loop: false,
    loopFillGroupWithBlank: true,

    navigation: {
        nextEl: ".co-operate-slide .button-next-co-operate",
        prevEl: ".co-operate-slide .button-prev-co-operate",
    },
});