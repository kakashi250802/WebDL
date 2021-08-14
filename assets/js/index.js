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
        picDemo: './assets/img/Course image-1.svg',
        name: 'Everything You Need to Know About Business',
        picAuthor: './assets/img/author1.svg',
        authorName: 'Nicole Brown',
        oldPirce: '$99.99',
        newPirce: '$49.65',
        voted: '4.5',
        followed: '120',
        viewed: '28,500',
        played: '36'
    },
    {
        picDemo: './assets/img/Course image-2.svg',
        name: 'Statistics Data Science and Business Analysis',
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
        picDemo: './assets/img/Course image-3.svg',
        name: 'AWS Certified Solutions Architect Associate',
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
        picDemo: './assets/img/Course image-1.svg',
        name: 'Everything You Need to Know About Business',
        picAuthor: './assets/img/author1.svg',
        authorName: 'Nicole Brown',
        oldPirce: '$99.99',
        newPirce: '$49.65',
        voted: '4.5',
        followed: '120',
        viewed: '28,500',
        played: '36'
    },
    {
        picDemo: './assets/img/Course image-2.svg',
        name: 'Statistics Data Science and Business Analysis',
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
        picDemo: './assets/img/Course image-3.svg',
        name: 'AWS Certified Solutions Architect Associate',
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
        picDemo: './assets/img/Course image-1.svg',
        name: 'Everything You Need to Know About Business',
        picAuthor: './assets/img/author1.svg',
        authorName: 'Nicole Brown',
        oldPirce: '$99.99',
        newPirce: '$49.65',
        voted: '4.5',
        followed: '120',
        viewed: '28,500',
        played: '36'
    },
    {
        picDemo: './assets/img/Course image-2.svg',
        name: 'Statistics Data Science and Business Analysis',
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
        picDemo: './assets/img/Course image-3.svg',
        name: 'AWS Certified Solutions Architect Associate',
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
        picDemo: './assets/img/Course image-1.svg',
        name: 'Everything You Need to Know About Business',
        picAuthor: './assets/img/author1.svg',
        authorName: 'Nicole Brown',
        oldPirce: '$99.99',
        newPirce: '$49.65',
        voted: '4.5',
        followed: '120',
        viewed: '28,500',
        played: '36'
    },
    {
        picDemo: './assets/img/Course image-2.svg',
        name: 'Statistics Data Science and Business Analysis',
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
        picDemo: './assets/img/Course image-3.svg',
        name: 'AWS Certified Solutions Architect Associate',
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
        picDemo: './assets/img/Course image-1.svg',
        name: 'Everything You Need to Know About Business',
        picAuthor: './assets/img/author1.svg',
        authorName: 'Nicole Brown',
        oldPirce: '$99.99',
        newPirce: '$49.65',
        voted: '4.5',
        followed: '120',
        viewed: '28,500',
        played: '36'
    },
    {
        picDemo: './assets/img/Course image-2.svg',
        name: 'Statistics Data Science and Business Analysis',
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
        picDemo: './assets/img/Course image-3.svg',
        name: 'AWS Certified Solutions Architect Associate',
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
        picDemo: './assets/img/Course image-1.svg',
        name: 'Everything You Need to Know About Business',
        picAuthor: './assets/img/author1.svg',
        authorName: 'Nicole Brown',
        oldPirce: '$99.99',
        newPirce: '$49.65',
        voted: '4.5',
        followed: '120',
        viewed: '28,500',
        played: '36'
    },
    {
        picDemo: './assets/img/Course image-2.svg',
        name: 'Statistics Data Science and Business Analysis',
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
        picDemo: './assets/img/Course image-3.svg',
        name: 'AWS Certified Solutions Architect Associate',
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
        picDemo: './assets/img/Course image-1.svg',
        name: 'Everything You Need to Know About Business',
        picAuthor: './assets/img/author1.svg',
        authorName: 'Nicole Brown',
        oldPirce: '$99.99',
        newPirce: '$49.65',
        voted: '4.5',
        followed: '120',
        viewed: '28,500',
        played: '36'
    },
    {
        picDemo: './assets/img/Course image-2.svg',
        name: 'Statistics Data Science and Business Analysis',
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
        picDemo: './assets/img/Course image-3.svg',
        name: 'AWS Certified Solutions Architect Associate',
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
        picDemo: './assets/img/Course image-1.svg',
        name: 'Everything You Need to Know About Business',
        picAuthor: './assets/img/author1.svg',
        authorName: 'Nicole Brown',
        oldPirce: '$99.99',
        newPirce: '$49.65',
        voted: '4.5',
        followed: '120',
        viewed: '28,500',
        played: '36'
    },
    {
        picDemo: './assets/img/Course image-2.svg',
        name: 'Statistics Data Science and Business Analysis',
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
        picDemo: './assets/img/Course image-3.svg',
        name: 'AWS Certified Solutions Architect Associate',
        picAuthor: './assets/img/author1.svg',
        authorName: 'Nicole Brown',
        oldPirce: '$99.99',
        newPirce: '$49.65',
        voted: '4.5',
        followed: '120',
        viewed: '28,500',
        played: '4.5'
    },
]

let coursesCategoryList = [

    {
        index: 'to-right',
        name: 'Design',
        img: './assets/img/design-icon.svg',
        content: 'Learn Adobe Illustrator CC graphic design, logo design, and more with this in-depth, practical, easy-to-follow course!'
    }, {
        index: 'to-top',
        name: 'Development',
        img: './assets/img/monitor.svg',
        content: 'Learn Adobe Illustrator CC graphic design, logo design, and more with this in-depth, practical, easy-to-follow course!'
    },
    {
        index: 'to-top',
        name: 'IT & Software',
        img: './assets/img/connect item.svg',
        content: 'Learn Adobe Illustrator CC graphic design, logo design, and more with this in-depth, practical, easy-to-follow course!'
    },
    {
        index: 'to-left',
        name: 'Business',
        img: './assets/img/bag-icon.svg',
        content: 'Learn Adobe Illustrator CC graphic design, logo design, and more with this in-depth, practical, easy-to-follow course!'
    },
    {
        index: 'to-right',

        name: 'Marketing',
        img: './assets/img/volume.svg',
        content: 'Learn Adobe Illustrator CC graphic design, logo design, and more with this in-depth, practical, easy-to-follow course!'
    },
    {
        index: 'to-top',

        name: 'Photography',
        img: './assets/img/camera.svg',
        content: 'Learn Adobe Illustrator CC graphic design, logo design, and more with this in-depth, practical, easy-to-follow course!'
    },
    {
        index: 'to-top',

        name: 'Health & Care',
        img: './assets/img/heart.svg',
        content: 'Learn Adobe Illustrator CC graphic design, logo design, and more with this in-depth, practical, easy-to-follow course!'
    },
    {
        index: 'to-right',

        name: 'Technology',
        img: './assets/img/connect-dislay.svg',
        content: 'Learn Adobe Illustrator CC graphic design, logo design, and more with this in-depth, practical, easy-to-follow course!'
    }
]

let courseSlideItems = document.querySelector('#courses-slide-items');

let coOperateLists = [
    './assets/img/envato-logo.svg',
    './assets/img/behance-logo.svg',
    './assets/img/dribbbe-logo.svg',
    './assets/img/google-logo.svg',
    './assets/img/slack-logo.svg',
    './assets/img/udemy-logo.svg',
    './assets/img/envato-logo.svg',
    './assets/img/behance-logo.svg',
    './assets/img/dribbbe-logo.svg',
    './assets/img/google-logo.svg',
    './assets/img/slack-logo.svg',
    './assets/img/udemy-logo.svg',
    './assets/img/envato-logo.svg',
    './assets/img/behance-logo.svg',
    './assets/img/dribbbe-logo.svg',
    './assets/img/google-logo.svg',
    './assets/img/slack-logo.svg',
    './assets/img/udemy-logo.svg',
    './assets/img/envato-logo.svg',
    './assets/img/behance-logo.svg',
    './assets/img/dribbbe-logo.svg',
    './assets/img/google-logo.svg',
    './assets/img/slack-logo.svg',
    './assets/img/udemy-logo.svg',

]

let coOperateSlidesItems = document.querySelector('#co-operate-Slides');


renderCategoryCourseList = () => {
    coursesSlidesList.forEach((item, index) => {
        let courseSlideItem = `
         <!-- courses item -->
         <div class="swiper-slide to-top show-on-scroll" aria-label="${index + 1}/${coursesCategoryList.length}">
        <a href="#"class="course-item" >
            <div class="img">
                <img src="${item.picDemo}" alt="">
            </div>
            <div class="course-item-info">
                <div class="base-info">
                    <div>
                        <img src="./assets/img/Star.svg" alt="">
                        <p>${item.voted} (${item.followed})</p>
                    </div>
                    <div>
                        <img src="./assets/img/viewed.svg" alt="">
                        <p>${item.viewed}</p>
                    </div>
                    <div>
                        <img src="./assets/img/play-circle.svg" alt="">
                        <p>${item.played} Lession</p>
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
        <div class="category-item ${item.index} show-on-scroll">
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
    coOperateLists.forEach((item) => {
        let listcoOperateSlides = `
    <!-- co-operate item -->
    <div class="swiper-slide">
    <a href="#" class="co-operate-item ">
    <div class="img">
            <img src="${item}" alt="">
            </div>
        </a>
    </div>
    <!-- End co-operate item -->
    `;
        coOperateSlidesItems.insertAdjacentHTML("beforeend", listcoOperateSlides);

    })

}
renderCategoryCourseList();

let slideItems = document.querySelectorAll('.courses-slide .course-item');

setProgress = () => {

    let nowIndex = parseFloat(document.querySelector('.swiper-slide-active').getAttribute("aria-label")) + 2;
    let percentNow = -100 + nowIndex / slideItems.length * 100 + "% ";
    progressBar.style.transform = `translateX(${percentNow})`;

}

setProgress();
let el_to_show = document.querySelectorAll('.show-on-scroll');
setTimeout(() => {

    loop();
}, 100);