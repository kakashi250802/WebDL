// processbar courses
let progressBar = document.querySelector('.courses-slide #progress');

document.querySelector('.courses-slide .button-next').addEventListener('click', () => {
    setProgress();


});
// 
document.querySelector('.courses-slide .button-prev').addEventListener('click', () => {
    setProgress();
    if (parseFloat(document.querySelector('.swiper-slide-active').getAttribute("aria-label")) + 2 > 3) {
        document.querySelector('.courses-slide .button-prev').setAttribute("aria-disabled", "flase");
        document.querySelector('.courses-slide .button-prev').classList.remove('swiper-button-disabled');
    }
});

// courses category list
let coursesCategoryItems = document.querySelector('#category-courses-item');
let coursesSlidesList = [{
        picDemo: './assets/img/Course image.svg',
        name: 'Everything You Need to Know About Business',
        picAuthor: './assets/img/author1.svg',
        authorName: 'Nicole Brown',
        oldPirce: '$99.99',
        newPirce: '$49.65',
        voted: '4.5',
        followed: '120',
        viewed: '28,500',
        played: '4.5'
    },
    {
        picDemo: './assets/img/Course image.svg',
        name: 'Everything You Need to Know About Business',
        picAuthor: './assets/img/author1.svg',
        authorName: 'Nicole Brown',
        oldPirce: '$99.99',
        newPirce: '$49.65',
        voted: '4.5',
        followed: '120',
        viewed: '28,500',
        played: '4.5'
    },
    {
        picDemo: './assets/img/Course image.svg',
        name: 'Everything You Need to Know About Business',
        picAuthor: './assets/img/author1.svg',
        authorName: 'Nicole Brown',
        oldPirce: '$99.99',
        newPirce: '$49.65',
        voted: '4.5',
        followed: '120',
        viewed: '28,500',
        played: '4.5'
    },
    {
        picDemo: './assets/img/Course image.svg',
        name: 'Everything You Need to Know About Business',
        picAuthor: './assets/img/author1.svg',
        authorName: 'Nicole Brown',
        oldPirce: '$99.99',
        newPirce: '$49.65',
        voted: '4.5',
        followed: '120',
        viewed: '28,500',
        played: '4.5'
    },
    {
        picDemo: './assets/img/Course image.svg',
        name: 'Everything You Need to Know About Business',
        picAuthor: './assets/img/author1.svg',
        authorName: 'Nicole Brown',
        oldPirce: '$99.99',
        newPirce: '$49.65',
        voted: '4.5',
        followed: '120',
        viewed: '28,500',
        played: '4.5'
    },
    {
        picDemo: './assets/img/Course image.svg',
        name: 'Everything You Need to Know About Business',
        picAuthor: './assets/img/author1.svg',
        authorName: 'Nicole Brown',
        oldPirce: '$99.99',
        newPirce: '$49.65',
        voted: '4.5',
        followed: '120',
        viewed: '28,500',
        played: '4.5'
    },
    {
        picDemo: './assets/img/Course image.svg',
        name: 'Everything You Need to Know About Business',
        picAuthor: './assets/img/author1.svg',
        authorName: 'Nicole Brown',
        oldPirce: '$99.99',
        newPirce: '$49.65',
        voted: '4.5',
        followed: '120',
        viewed: '28,500',
        played: '4.5'
    },
    {
        picDemo: './assets/img/Course image.svg',
        name: 'Everything You Need to Know About Business',
        picAuthor: './assets/img/author1.svg',
        authorName: 'Nicole Brown',
        oldPirce: '$99.99',
        newPirce: '$49.65',
        voted: '4.5',
        followed: '120',
        viewed: '28,500',
        played: '4.5'
    },
    {
        picDemo: './assets/img/Course image.svg',
        name: 'Everything You Need to Know About Business',
        picAuthor: './assets/img/author1.svg',
        authorName: 'Nicole Brown',
        oldPirce: '$99.99',
        newPirce: '$49.65',
        voted: '4.5',
        followed: '120',
        viewed: '28,500',
        played: '4.5'
    },
    {
        picDemo: './assets/img/Course image.svg',
        name: 'Everything You Need to Know About Business',
        picAuthor: './assets/img/author1.svg',
        authorName: 'Nicole Brown',
        oldPirce: '$99.99',
        newPirce: '$49.65',
        voted: '4.5',
        followed: '120',
        viewed: '28,500',
        played: '4.5'
    }
]
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
let courseSlideItems = document.querySelector('#courses-slide-items');
renderCategoryCourseList = () => {
    coursesSlidesList.forEach((item, index) => {
        let courseSlideItem = `
         <!-- courses item -->
         <div class="swiper-slide" aria-label="${index + 1}/${coursesCategoryList.length}">
        <a href="#"class="course-item" >
            <div class="img">
                <img src="${item.picDemo}" alt="">
            </div>
            <div class="course-item-info">
                <div class="base-info">
                    <div>
                        <img src="./assets/img/Star.svg" alt="">
                        <p>${item.voted} ${item.followed}</p>
                    </div>
                    <div>
                        <img src="./assets/img/viewed.svg" alt="">
                        <p>${item.viewed}</p>
                    </div>
                    <div>
                        <img src="./assets/img/play-circle.svg" alt="">
                        <p>${item.played} ${item.followed}</p>
                    </div>
                </div>
                <div class="course-name">
                    <h3>${item.name}</h3>
                </div>
                <div class="course-more-info">
                    <div class="author">
                        <div class="img">
                            <img src="${item.picAuthor}" alt="">
                        </div>
                        <p>${item.authorName}</p>
                    </div>
                    <div class="price">
                        <span class="old"><del>${item.oldPirce}</del></span>
                        <span class="current">${item.newPirce}</span>
                    </div>
                </div>
            </div>
        </a>
        </div>
        <!-- End courses item -->
`
        courseSlideItems.insertAdjacentHTML('beforeend', courseSlideItem);

    })

    coursesCategoryList.forEach(item => {
        let listCourseCategory = `
        <a href="#" class="col-3">
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
    </a>`
        coursesCategoryItems.insertAdjacentHTML("beforeend", listCourseCategory)
    })
}
renderCategoryCourseList();
let slideItems = document.querySelectorAll('.courses-slide .course-item');
setProgress = () => {

    let nowIndex = parseFloat(document.querySelector('.swiper-slide-active').getAttribute("aria-label")) + 2;

    console.log(nowIndex)
    let percentNow = -100 + nowIndex / slideItems.length * 100 + "% ";
    progressBar.style.transform = `translateX(${percentNow})`;

}
setProgress();