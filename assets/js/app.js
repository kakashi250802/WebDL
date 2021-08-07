let heading = document.querySelector('header > div');
// change header style when scroll
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        heading.classList.add('shrink');
    } else {
        heading.classList.remove('shrink');
    }
})