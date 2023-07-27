window.addEventListener('scroll', function() {
    var header = document.querySelector('.header');
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 10) {
        header.classList.add('header-fixed');
    } else {
        header.classList.remove('header-fixed');
    }
});

