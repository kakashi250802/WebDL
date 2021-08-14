let heading = document.querySelector('header > div');
// change header style when scroll
window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
            heading.classList.add('shrink');
        } else {
            heading.classList.remove('shrink');
        }
    })
    // elemnet show on scroll
let scroll = window.requestAnimationFrame || function(callback) {
    window.setTimeout(callback, 1000 / 60)
};


isElInViewPort = (el) => {
    let rect = el.getBoundingClientRect();

    let distance = 50;

    return rect.top <= (window.innerHeight - distance || document.documentElement.clientHeight - distance);
}

loop = () => {
    el_to_show.forEach((el) => {
        if (isElInViewPort(el)) el.classList.add('show')
    });
    scroll(loop);
};