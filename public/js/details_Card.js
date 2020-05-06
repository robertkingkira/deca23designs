// CARD 2 E-Commerce
var btnMore_Blog = document.getElementById('btnMore-Card');
var modalCard_Blog = document.getElementsByClassName('moreDetails-cards')[0];
var btnClose_Blog = document.getElementsByClassName('cardClose')[0];

// Listen for open click
btnMore_Blog.addEventListener('click', openCard_Blog);

// Listen for close click
btnClose_Blog.addEventListener('click', closeCard_Blog);

// Outside Click
window.addEventListener('click', clickOutsideCard_Blog);

// Function to open modal
function openCard_Blog() {
    modalCard_Blog.style.display = 'flex';
}

// function to close modal
function closeCard_Blog() {
    modalCard_Blog.style.display = 'none';
}

// function to close modal if outside click
function clickOutsideCard_Blog(e) {
    if (e.target == modalCard_Blog) {
        modalCard_Blog.style.display = 'none';
    }
}
