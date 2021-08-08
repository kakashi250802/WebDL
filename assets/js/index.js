// processbar courses
let progressBar = document.querySelector('.courses-slide #progress');
let slideItems = document.querySelectorAll('.courses-slide .course-item');
document.querySelector('.courses-slide .button-next').addEventListener('click', () => {
    setProgress();
});
// 
document.querySelector('.courses-slide .button-prev').addEventListener('click', () => {
    setProgress();
});
setProgress = () => {
    let nowIndex = parseFloat(document.querySelector('.swiper-slide-active').getAttribute("aria-label")) + 2;
    progressBar.style.width = nowIndex / slideItems.length * 100 + "%";
}
setProgress();
// courses category list
let coursesCategoryItems = document.querySelector('#category-courses-item');

let coursesCategoryList = [

    {
        name: 'Design',
        img: './assets/img/design-icon.svg',
        content: 'Learn Adobe Illustrator CC graphic design, logo design, and more with this in-depth, practical, easy-to-follow course!'
    }, {
        name: 'Development',
        img: './assets/img/monitor.svg',
        content: 'Learn Adobe Illustrator CC graphic design, logo design, and more with this in-depth, practical, easy-to-follow course!'
    },
    {
        name: 'IT & Software',
        img: './assets/img/connect item.svg',
        content: 'Learn Adobe Illustrator CC graphic design, logo design, and more with this in-depth, practical, easy-to-follow course!'
    },
    {
        name: 'Business',
        img: './assets/img/bag-icon.svg',
        content: 'Learn Adobe Illustrator CC graphic design, logo design, and more with this in-depth, practical, easy-to-follow course!'
    },
    {
        name: 'Marketing',
        img: './assets/img/volume.svg',
        content: 'Learn Adobe Illustrator CC graphic design, logo design, and more with this in-depth, practical, easy-to-follow course!'
    },
    {
        name: 'Photography',
        img: './assets/img/camera.svg',
        content: 'Learn Adobe Illustrator CC graphic design, logo design, and more with this in-depth, practical, easy-to-follow course!'
    },
    {
        name: 'Health & Care',
        img: './assets/img/heart.svg',
        content: 'Learn Adobe Illustrator CC graphic design, logo design, and more with this in-depth, practical, easy-to-follow course!'
    },
    {
        name: 'Technology',
        img: './assets/img/connect-dislay.svg',
        content: 'Learn Adobe Illustrator CC graphic design, logo design, and more with this in-depth, practical, easy-to-follow course!'
    }
]
renderCategoryCourseList = () => {

    coursesCategoryList.forEach(item => {
        let listCourseCategory = `
        <div class="col-3">
        <div class="category-item">
            <div class="img">
                <img src="${item.img}" alt="">
            </div>
            <div class="title">
                <h3>${item.name}</h3>
            </div>
            <div class="info">
                <p>${item.content}</p>
            </div>
        </div>
    </div>`
        coursesCategoryItems.insertAdjacentHTML("beforeend", listCourseCategory)
    })
}
renderCategoryCourseList();