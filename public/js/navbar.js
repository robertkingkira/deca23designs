$(document).on("scroll", function () {
    if ($(document).scrollTop() > 80) {
        $(".header-main").addClass("main-header-small");
    } else {
        $(".header-main").removeClass("main-header-small");
    }
});





/* var nav = document.querySelector('.header-main');
var logo = document.querySelector('.logoImg');
var logo23 = document.querySelector('.logoImg23');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        nav.classList += ' main-header-small';
    } else {
        nav.classList = 'header-main';
    }
}); */

/* Shrink for Logo */
/* window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        logo.classList += ' logo-ca';
    } else {
        logo.classList = 'logoImg';
    }
});

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        logo23.classList += ' logo-23';
    } else {
        logo23.classList = 'logoImg23';
    }

});  */
