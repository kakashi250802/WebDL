let progressBar = document.querySelector('#progress');
let slideItems = document.querySelectorAll('.course-item');
document.querySelector('.button-next').addEventListener('click', () => {
    setProgress();
});
document.querySelector('.button-prev').addEventListener('click', () => {
    setProgress();
});
setProgress = () => {
    let nowIndex = parseFloat(document.querySelector('.swiper-slide-active').getAttribute("aria-label")) + 2;
    progressBar.style.width = nowIndex / slideItems.length * 100 + "%";
}
setProgress();